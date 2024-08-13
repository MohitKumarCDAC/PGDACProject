package com.app.dto;

import java.time.LocalDate;

import com.app.entity.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SalesDto {

	private Product productName;

	private double productWeight;

	private double productRate;

	private double totalPrice;

	private double paidBalance;

	private double credit;

	private LocalDate sellingDate;

	private String aadharNumber;
}