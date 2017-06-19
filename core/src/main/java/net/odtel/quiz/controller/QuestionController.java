/*
 *   Licensed to the Apache Software Foundation (ASF) under one
 *   or more contributor license agreements.  See the NOTICE file
 *   distributed with this work for additional information
 *   regarding copyright ownership.  The ASF licenses this file
 *   to you under the Apache License, Version 2.0 (the
 *   "License"); you may not use this file except in compliance
 *   with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *   software distributed under the License is distributed on an
 *   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *   KIND, either express or implied.  See the License for the
 *   specific language governing permissions and limitations
 *   under the License.
 *
 *   Author: Alexander Evstratyev
 *   Created: 2017/06/19
 *   Copyright (c) 2017
 */
package net.odtel.quiz.controller;

import net.odtel.quiz.Constants;
import net.odtel.quiz.model.Answer;
import net.odtel.quiz.model.Question;
import net.odtel.quiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(Constants.Api.QUESTION_API)
@CrossOrigin
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    
    @PostMapping(path = Constants.Api.ROOT)
    public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
        return new ResponseEntity<>(questionService.addQuestion(question), HttpStatus.CREATED);
    }
    
    @GetMapping(path = "/{id}")
    public Question getQuestionById(@PathVariable("id") String id) {

//        Question question = new Question();
//        question.setAccuracy(2);
//        question.setCost(10);
//        question.setType("Основные понятия биоэкологии");
//        question.setTitle("Термин «экология» предложил:");
//
//        Answer answer01 = new Answer();
//        answer01.setChecked(false);
//        answer01.setCost(0);
//        answer01.setRight(1);
//        answer01.setTitle("Э. Геккель");
//
//        Answer answer02 = new Answer();
//        answer02.setChecked(false);
//        answer02.setCost(0);
//        answer02.setRight(2);
//        answer02.setTitle("В. И. Вернадский;");
//
//        Answer answer03 = new Answer();
//        answer03.setChecked(false);
//        answer03.setCost(0);
//        answer03.setRight(2);
//        answer03.setTitle("Ч. Дарвин");
//
//        Answer answer04 = new Answer();
//        answer04.setChecked(false);
//        answer04.setCost(0);
//        answer04.setRight(2);
//        answer04.setTitle("А. Тенсли");
//
//        List<Answer> answers0 = new ArrayList<>();
//        answers0.add(answer01);
//        answers0.add(answer02);
//        answers0.add(answer03);
//        answers0.add(answer04);
//        question.setAnswer(answers0);
//        questionService.addQuestion(question);
//
//        question = new Question();
//        question.setAccuracy(2);
//        question.setCost(10);
//        question.setType("Общие вопросы природопользования и охраны природы");
//        question.setTitle("Область знаний и практическая деятельность человека " +
//                "по рациональному использованию природных ресурсов в целях удовлетворения материальных " +
//                "и культурных потребностей общества называется …");
//
//        Answer answer1 = new Answer();
//        answer1.setChecked(false);
//        answer1.setCost(0);
//        answer1.setRight(1);
//        answer1.setTitle("природопользованием");
//
//        Answer answer2 = new Answer();
//        answer2.setChecked(false);
//        answer2.setCost(0);
//        answer2.setRight(2);
//        answer2.setTitle("социологией");
//
//        Answer answer3 = new Answer();
//        answer3.setChecked(false);
//        answer3.setCost(0);
//        answer3.setRight(2);
//        answer3.setTitle("естествознанием");
//
//        Answer answer4 = new Answer();
//        answer4.setChecked(false);
//        answer4.setCost(0);
//        answer4.setRight(2);
//        answer4.setTitle("культурологией");
//
//        List<Answer> answers = new ArrayList<>();
//        answers.add(answer1);
//        answers.add(answer2);
//        answers.add(answer3);
//        answers.add(answer4);
//        question.setAnswer(answers);
//        questionService.addQuestion(question);
//        return question;

          return questionService.getQuestionById(id);
    }
    
    @GetMapping(path = "/allQuestions")
    public List<Question> getAllQuestions() {
       return questionService.getAllQuestions();
    }
}
