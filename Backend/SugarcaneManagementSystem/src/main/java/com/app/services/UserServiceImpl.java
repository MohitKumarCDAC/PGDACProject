package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.UserDto;
import com.app.dto.UserUpdateDto;
import com.app.entity.Role;
import com.app.entity.User;
import com.app.exception.DuplicateEntryException;
import com.app.exception.InvalidCredentialsException;
import com.app.exception.UserNotFoundException;
import com.app.repositry.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	

	@Override
	public UserDto registerUser(UserDto userDto) {
	    try {
	        // Convert DTO to entity
	        User user = mapper.map(userDto, User.class);

	        // Encrypt the password before saving
	        String encodedPassword = passwordEncoder.encode(userDto.getPassword());
	        user.setPassword(encodedPassword);
	        
	        if(userRepo.findByAadharNumber(user.getAadharNumber()) != null) {
	        	throw new DuplicateEntryException("User with " + user.getAadharNumber() + " already exists");
	        }

	        // Save user to repository
	        User savedUser = userRepo.save(user);

	        // Map saved user to DTO and return
	        return mapper.map(savedUser, UserDto.class);
	    } catch (Exception e) {
	        // Log the stack trace for better debugging
	        e.printStackTrace();
	        throw new RuntimeException("User registration failed: " + e.getMessage(), e);
	    }
	}


	
	

	@Override
	public UserDto login(String email, String aadharNumber, String password) {
	    User user = null;

	    // Find user by email or Aadhar number
	    if (email != null && !email.isEmpty()) {
	        user = userRepo.findByEmail(email);
	    } else if (aadharNumber != null && !aadharNumber.isEmpty()) {
	        user = userRepo.findByAadharNumber(aadharNumber);
	    }

	    // Check if user exists and validate password
	    if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
	        throw new InvalidCredentialsException("Invalid email/Aadhar number or password.");
	    }

	    // Map to DTO if needed
	    return mapper.map(user, UserDto.class);
	}


	
	
	@Override
	public List<UserDto> getUsersByRole(Role role) {
		List<User> users = userRepo.findByRole(role);
		return users.stream().map(user -> mapper.map(user, UserDto.class)).collect(Collectors.toList());
	}
	
	@Override
	public UserUpdateDto updateUser(String aadharNumber, UserUpdateDto userDto) {
		// Find the user by Aadhar number
		User existingUser = userRepo.findByAadharNumber(aadharNumber);
		if (existingUser == null) {
			throw new RuntimeException("User with Aadhar number " + aadharNumber + " not found.");
		}

		// Update user details
		existingUser.setName(userDto.getName());
		existingUser.setEmail(userDto.getEmail());
		//Encrypt the updated passeord before saving
		existingUser.setPassword(passwordEncoder.encode(userDto.getPassword()));
		existingUser.setContactNumber(userDto.getContactNumber());
	

		// Save the updated user
		User updatedUser = userRepo.save(existingUser);

		// Map to DTO and return
		return mapper.map(updatedUser, UserUpdateDto.class);
	}

	public void deleteUser(String aadharNumber) {
		User user = userRepo.findByAadharNumber(aadharNumber);
		if (user == null) {
			throw new UserNotFoundException("User with aadhar number " + aadharNumber + " not found.");
		}

		userRepo.delete(user);
	}
	//get single user by aadhar number
	public UserDto getUserByAadharNumber(String aadharNumber) {
	    User user = userRepo.findByAadharNumber(aadharNumber);
	    if (user == null) {
	        throw new UserNotFoundException("User with Aadhar number " + aadharNumber + " not found.");
	    }
	    return mapper.map(user, UserDto.class);
	}
	
	
	
	
	
}
