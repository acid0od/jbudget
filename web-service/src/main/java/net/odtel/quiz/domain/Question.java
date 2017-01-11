package net.odtel.quiz.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@ToString
@Document
public class Question  {
    @Id
    private Long id;
    private String title;
    private String type;
    private List<Answer> answer;
    private int cost; // 1-10
    private int accuracy; // How accurate is the answer. 1-10
    private String prompt; //
}
