package com.app.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.NonNull;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Disable CSRF for simplicity in development
            .authorizeRequests()
                .antMatchers("/api/auth/login").permitAll() // Allow public access to login endpoint
                .antMatchers("/api/user/**").permitAll()
                .antMatchers("/api/feedback/**").permitAll()
                .antMatchers("/api/farmers/**").permitAll()
                .antMatchers("/api/employee/**").permitAll()
                .antMatchers("/api/customer/**").permitAll()
//                .antMatchers("").permitAll()
                .anyRequest().authenticated() // All other requests require authentication
            .and()
            .formLogin()
                .loginPage("/login") // Custom login page URL
                .permitAll()
            .and()
            .logout()
                .permitAll();
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}