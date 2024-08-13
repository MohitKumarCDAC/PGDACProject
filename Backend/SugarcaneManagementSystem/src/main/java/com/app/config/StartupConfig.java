package com.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.app.initializer.AdminInitializer;

@Configuration
public class StartupConfig {

    @Autowired
    private AdminInitializer adminInitializer;

    @Bean
    public CommandLineRunner run() {
        return args -> adminInitializer.initializeAdminUser();
    }
}
