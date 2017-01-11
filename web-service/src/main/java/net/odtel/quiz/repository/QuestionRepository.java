package net.odtel.quiz.repository;

import net.odtel.quiz.domain.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, Long> {
    
}
