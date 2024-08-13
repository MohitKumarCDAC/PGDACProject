package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserUpdateDto {
	private String name;

	private String email;

	private String contactNumber;
	private String aadharNumber;

	private String password;

}
