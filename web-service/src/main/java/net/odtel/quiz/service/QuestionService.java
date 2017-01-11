package net.odtel.quiz.service;

import net.odtel.quiz.domain.Question;

public interface QuestionService {
    
    void insert (Question question);
    
    Question findOne(Long id);
}
