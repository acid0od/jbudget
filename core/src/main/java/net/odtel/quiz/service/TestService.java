/* ===========================================================================
 * Copyright (c) 2015 Comcast Corp. All rights reserved.
 * ===========================================================================
 *
 * Author: Alexander Ievstratiev
 * Created: 08/17/2017  5:03 PM
 */
package net.odtel.quiz.service;

import net.odtel.quiz.model.Question;

import java.util.List;

public interface TestService {
    List<Question> getTestQuestions(String type);
}
