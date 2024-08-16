package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDto;
import com.app.dto.UserUpdateDto;
import com.app.entity.Role;
import com.app.exception.UserNotFoundException;
import com.app.services.UserService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;

	//add user 
	@PostMapping("/register")
	@Operation(description = "Add User")
	public ResponseEntity<?> addUser(@RequestBody UserDto userRegis) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.registerUser(userRegis));
	}

	//get Accountant All customers in list
	@GetMapping("/customers")
	@Operation(description = "Get All Customers")
	public ResponseEntity<List<UserDto>> getAllCustomers() {
		List<UserDto> customers = userService.getUsersByRole(Role.CUSTOMER);
		return ResponseEntity.status(HttpStatus.OK).body(customers);
	}

	//get Accountant All farmers in list
	@GetMapping("/farmers")
	@Operation(description = "Get All Farmers")
	public ResponseEntity<List<UserDto>> getAllFarmers() {
		List<UserDto> farmers = userService.getUsersByRole(Role.FARMER);
		return ResponseEntity.status(HttpStatus.OK).body(farmers);
	}

	//get Accountant All employees in list
	@GetMapping("/employees")
	@Operation(description = "Get All Employees")
	public ResponseEntity<List<UserDto>> getAllEmployees() {
		List<UserDto> employees = userService.getUsersByRole(Role.EMPLOYEE);
		return ResponseEntity.status(HttpStatus.OK).body(employees);
	}

	//get Accountant All details in list
	@GetMapping("/accountants")
	@Operation(description = "Get All Accountants")
	public ResponseEntity<List<UserDto>> getAllAccountants() {
		List<UserDto> accountants = userService.getUsersByRole(Role.ACCOUNTANT);
		return ResponseEntity.status(HttpStatus.OK).body(accountants);
	}
	
//update user
	@PutMapping("/update/{aadharNumber}")
	@Operation(description = "Update User Details")
	public ResponseEntity<UserUpdateDto> updateUser(@PathVariable String aadharNumber, @RequestBody UserUpdateDto userDto) {
		UserUpdateDto updatedUser = userService.updateUser(aadharNumber, userDto);
		return ResponseEntity.status(HttpStatus.OK).body(updatedUser);
	}

	//delete user by aadhar number
	@DeleteMapping("/delete/{aadharNumber}")
	@Operation(description = "Delete User")
	public ResponseEntity<String> deleteUser(@PathVariable String aadharNumber) {
		userService.deleteUser(aadharNumber);
		return ResponseEntity.status(HttpStatus.NO_CONTENT)
				.body("User with Aadhar number " + aadharNumber + " has been deleted.");
	}

	
	//get single user by aadhar number
	 @GetMapping("/singleUser/{aadharNumber}")
	    public ResponseEntity<UserDto> getUserByAadharNumber(@PathVariable String aadharNumber) {
	        try {
	            UserDto userDto = userService.getUserByAadharNumber(aadharNumber);
	            return new ResponseEntity<>(userDto, HttpStatus.OK);
	        } catch (UserNotFoundException e) {
	            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	        }
	    }
}
