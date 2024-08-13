package com.app.initializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entity.Address;
import com.app.entity.Role;
import com.app.entity.User;
import com.app.repositry.UserRepository;

@Component
public class AdminInitializer {

    @Autowired
    private UserRepository userRepo;

    public void initializeAdminUser() {
        String adminEmail = "admin@gmail.com";
        String adminAadhar = "123456789012";
        String adminPassword = "admin123"; // Plain text password

        // Check if admin user already exists
        User existingUser = userRepo.findByEmail(adminEmail);
        if (existingUser == null) {
            User adminUser = new User();
            adminUser.setName("Admin");
            adminUser.setEmail(adminEmail);
            adminUser.setContactNumber("9876543210");
            adminUser.setRole(Role.ADMIN); // Assuming you have an ADMIN role in your enum
            adminUser.setAadharNumber(adminAadhar);
            adminUser.setPassword(adminPassword); // Set plain text password
            adminUser.setAddress(new Address()); // Initialize address if required

            userRepo.save(adminUser);
        }
    }
}
