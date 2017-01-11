package net.odtel.quiz.controllers;

import net.odtel.quiz.domain.Question;
import net.odtel.quiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.Collections;

@Component
@Path("/result")
public class ResultView {
    
    
    @Autowired
    private QuestionService questionService;
    
    @GET
    @Path("{programId}/")
    @Produces({"application/xml", "application/json"})
    public Response getGenres(@PathParam("programId") String programId) {
        Question one = questionService.findOne(1L);
        System.out.println("___" + one);
        return Response.ok(one).build();
    }
}
