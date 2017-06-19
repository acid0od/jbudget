/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 06/16/2017  5:06 PM
 */
package net.odtel.quiz.service;

import net.odtel.quiz.model.Question;

import java.util.List;

public interface QuestionService {
    Question addQuestion(Question question);
    List<Question> getAllQuestions();
    Question getQuestionById(String id);
}
