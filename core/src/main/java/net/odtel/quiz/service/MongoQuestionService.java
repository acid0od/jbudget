/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 06/16/2017  5:07 PM
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
public class MongoQuestionService implements QuestionService {
    
    private QuestionRepository repository;
    
    @Autowired
    public MongoQuestionService(final QuestionRepository repository) {
        this.repository = repository;
    }

    @Override
    public Question addQuestion(Question question) {
        Question save = repository.save(question);
        log.info("Save question: " + question.toString());
        return save;
    }
    
    @Override
    public List<Question> getAllQuestions() {
        return repository.findAll();
    }
    
    @Override
    public Question getQuestionById(String id) {
        return repository.findOne(id);
    }

    public void deleteQuestion(String id) {
        repository.delete(id);
    }
}
