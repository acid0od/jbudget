package net.odtel.quiz;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@ApplicationPath("/data")
@Component
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        packages("net.odtel.quiz.controllers");
    }
}