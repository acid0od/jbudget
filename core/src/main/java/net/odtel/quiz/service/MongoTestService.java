/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 08/17/2017  5:52 PM
 */
package net.odtel.quiz.service;

import lombok.extern.slf4j.Slf4j;
import net.odtel.quiz.model.Question;
import net.odtel.quiz.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class MongoTestService implements TestService {
    private QuestionRepository repository;
    
    @Autowired
    public MongoTestService(final QuestionRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public List<Question> getTestQuestions(String type) {
        return repository.findAll();
    }
}
