package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDto;
import com.app.services.UserService;

@RestController
@RequestMapping("/api")
public class AuthController {

	@Autowired
	private UserService userService;

	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@RequestParam(value = "email", required = false) String email,
			@RequestParam(value = "aadharNumber", required = false) String aadharNumber,
			@RequestParam("password") String password) {

		UserDto userDto = userService.login(email, aadharNumber, password);
		return ResponseEntity.ok(userDto);
	}
}
