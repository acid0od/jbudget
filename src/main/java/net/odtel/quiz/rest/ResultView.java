package net.odtel.quiz.rest;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Component
@Path("/result")
public class ResultView {
    
    @GET
    @Path("{programId}/")
    @Produces({"application/xml", "application/json"})
    public Response getGenres(@PathParam("programId") String programId) {

        return Response.ok().build();
    }
}
