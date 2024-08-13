package com.app.dto;

import com.app.entity.Address;
import com.app.entity.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {

	private String name;

	private String email;

	private String contactNumber;

	private Role role;

	private String aadharNumber;

	private String password;

	private Address address;

}
