package net.odtel.quiz.service.impl;

import net.odtel.quiz.domain.Question;
import net.odtel.quiz.repository.QuestionRepository;
import net.odtel.quiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService {
    
    @Autowired
    private QuestionRepository questionRepository;
    
    @Override
    public void insert(Question question) {
        questionRepository.insert(question);
    }
    
    @Override
    public Question findOne(Long id) {
        Question one = questionRepository.findOne(id);
        return one;
    }
    
}
