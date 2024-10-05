package com.app.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

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
                .permitAll()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)// Create a session only if necessary
                .maximumSessions(1)// Allow only one session per user
                .expiredUrl("/login?expired=true")// Redirect(login page) when session expires
                .and()
                .sessionFixation().migrateSession();
        
        return http.build();
    }

    
    //password Encoder
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}