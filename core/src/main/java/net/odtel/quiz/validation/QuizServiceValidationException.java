/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 08/15/2017  1:46 PM
 */
package net.odtel.quiz.validation;

public class QuizServiceValidationException extends RuntimeException {
    
    public QuizServiceValidationException() {
    }
    
    public QuizServiceValidationException(String message) {
        super(message);
    }
    
    public QuizServiceValidationException(String message, Throwable cause) {
        super(message, cause);
    }
}
