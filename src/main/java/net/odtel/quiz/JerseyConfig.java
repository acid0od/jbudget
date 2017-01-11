package net.odtel.quiz;

import org.glassfish.jersey.server.ResourceConfig;

public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        packages("net.odtel.quiz.rest");
    }
}
