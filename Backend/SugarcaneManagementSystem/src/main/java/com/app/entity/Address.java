package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Embeddable
public class Address {
	@Column(name = "city", length = 30)
	@NotBlank
	private String city;

	@NotBlank
	@Size(min = 6, message = "Pincode must be at least 6 characters long")
	private int pincode;

	@NotBlank
	private String state;

	public Address() {

	}

	public Address(@NotBlank String city, @NotBlank int pincode, @NotBlank String state) {
		super();
		this.city = city;
		this.pincode = pincode;
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
}
