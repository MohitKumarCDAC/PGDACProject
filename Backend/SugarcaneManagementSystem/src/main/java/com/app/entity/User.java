package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "email"),
		@UniqueConstraint(columnNames = "aadhar_no") })
public class User {

	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Column(length = 50)
	private String name;

	@NotBlank
	@Column(length = 50, unique = true)
	@Email(message = "Email should be valid")
	private String email;

	@NotBlank
	@Size(min = 10, max = 10)
	@Column(name = "contact_number", length = 10)
	@Pattern(regexp = "\\d{10}", message = "Contact number must be exactly 10 digits")
	private String contactNumber;

	@Enumerated(EnumType.STRING)
	@Column(name = "role", nullable = false)
	private Role role;

	@Size(min = 12, max = 12)
	@Column(name = "aadhar_no", length = 12)
	@Pattern(regexp = "\\d{12}", message = "Aadhar number must be exactly 12 digits")
	private String aadharNumber;

	@NotBlank
	@Size(min = 6, message = "Password must be at least 6 characters long")
	private String password;

	private Address address;
}
