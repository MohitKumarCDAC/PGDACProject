package com.app.dto;

import com.app.entity.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedbackDto {

	private String name;

	private String email;

	private Product product;

	private String message;
}
