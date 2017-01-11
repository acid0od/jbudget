package net.odtel.quiz;

import net.odtel.quiz.domain.Answer;
import net.odtel.quiz.domain.Question;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.PropertySource;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@PropertySource(value = {"classpath:service.properties", "file:${CONF_DIR}/service.properties"},ignoreResourceNotFound = true)
public class QuickQuizApplication {
    
    public static void main(String[] args) {
        ConfigurableApplicationContext run = SpringApplication.run(QuickQuizApplication.class, args);
       // QuestionServiceImpl bean = run.getBean(QuestionServiceImpl.class);
        
        Question question = new Question();
        question.setId(1L);
        question.setAccuracy(2);
        question.setCost(10);
        question.setType("Общие вопросы природопользования и охраны природы");
        question.setTitle("Область знаний и практическая деятельность человека " +
                "по рациональному использованию природных ресурсов в целях удовлетворения материальных " +
                "и культурных потребностей общества называется …");
    
        Answer answer1 = new Answer();
        answer1.setChecked(false);
        answer1.setCost(0);
        answer1.setRight(1);
        answer1.setTitle("природопользованием");
        
        Answer answer2 = new Answer();
        answer2.setChecked(false);
        answer2.setCost(0);
        answer2.setRight(2);
        answer2.setTitle("социологией");
    
        Answer answer3 = new Answer();
        answer3.setChecked(false);
        answer3.setCost(0);
        answer3.setRight(2);
        answer3.setTitle("естествознанием");
        
        Answer answer4 = new Answer();
        answer4.setChecked(false);
        answer4.setCost(0);
        answer4.setRight(2);
        answer4.setTitle("культурологией");
    
        List<Answer> answers = new ArrayList<>();
        answers.add(answer1);
        answers.add(answer2);
        answers.add(answer3);
        answers.add(answer4);
        question.setAnswer(answers);
        
        //bean.insert(question);
    }
}
