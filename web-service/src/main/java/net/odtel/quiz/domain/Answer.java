package net.odtel.quiz.domain;

import lombok.*;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@ToString
public class Answer {
    private String title;
    private int cost;
    private int right;
    private String prompt;
    private boolean checked;
}
