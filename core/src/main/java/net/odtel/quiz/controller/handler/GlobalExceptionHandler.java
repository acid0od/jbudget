/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 08/15/2017  1:28 PM
 */
package net.odtel.quiz.controller.handler;

import lombok.extern.slf4j.Slf4j;
import net.odtel.quiz.validation.QuizServiceValidationException;
import net.odtel.quiz.repository.EntityNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Object> handleInvalidRequest(final Exception e, final ServletWebRequest request) {
        final HttpStatus status = resolveHttpStatus(e);
        final Object error = new RestErrorMessage(status.value(), e.getClass().getSimpleName(), e.getMessage());
        
        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        log.error("status={}, type={}, message={}", ((RestErrorMessage) error).getStatus(), ((RestErrorMessage) error).getType(), ((RestErrorMessage) error).getMessage());
        return handleExceptionInternal(e, error, headers, status, request);
    }
    
    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        Throwable mostSpecificCause = ex.getMostSpecificCause();
        Object error;
        if (mostSpecificCause != null) {
            String exceptionName = mostSpecificCause.getClass().getName();
            String message = mostSpecificCause.getMessage();
            error = new RestErrorMessage(status.value(), exceptionName, message);
        } else {
            error = new RestErrorMessage(status.value(), ex.getClass().getSimpleName(), ex.getMessage());
        }
        
        headers.setContentType(MediaType.APPLICATION_JSON);
        log.error("status={}, type={}, message={}", ((RestErrorMessage) error).getStatus(), ((RestErrorMessage) error).getType(), ((RestErrorMessage) error).getMessage());
        return handleExceptionInternal(ex, error, headers, status, request);
    }
    
    private HttpStatus resolveHttpStatus(final Exception e) {
        if (e instanceof EntityNotFoundException) {
            return HttpStatus.NOT_FOUND;
        } else if (e instanceof QuizServiceValidationException) {
            return HttpStatus.BAD_REQUEST;
        } else {
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
    }
}
