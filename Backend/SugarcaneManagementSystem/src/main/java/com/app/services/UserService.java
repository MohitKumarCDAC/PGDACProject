package com.app.services;

import java.util.List;

import com.app.dto.UserDto;
import com.app.dto.UserUpdateDto;
import com.app.entity.Role;

public interface UserService {
	
	//register User
	UserDto registerUser(UserDto registerUser);

	//login 
	UserDto login(String email, String aadharNumber, String password);
	
	//list of user According to Role 
	List<UserDto> getUsersByRole(Role role);
	
	//update user
	UserUpdateDto updateUser(String aadharNumber, UserUpdateDto userDto);

	//delete user
	void deleteUser(String aadharNumber);
	
	//get single user by aadhar number
	UserDto getUserByAadharNumber(String aadharNumber);
}
