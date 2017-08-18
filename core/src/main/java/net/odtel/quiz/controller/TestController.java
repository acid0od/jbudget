/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 08/17/2017  4:57 PM
 */
package net.odtel.quiz.controller;

import net.odtel.quiz.Constants;
import net.odtel.quiz.model.Question;
import net.odtel.quiz.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(Constants.Api.TEST_API)
@CrossOrigin
public class TestController {
    @Autowired
    private TestService testService;
    
    @GetMapping(path = "/testQuestions")
    public List<Question> getAllQuestions() {
        return testService.getTestQuestions("");
    }
}