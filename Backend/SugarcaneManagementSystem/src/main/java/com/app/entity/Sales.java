package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "sales")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sales {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(name = "product_name", nullable = false)
	private Product productName;

	@Column(name = "product_weight")
	private double productWeight;

	@Column(name = "product_rate")
	private double productRate;

	@Column(name = "total_price")
	private double totalPrice;

	@Column(name = "paid_money")
	private double paidBalance;

	private double credit;

	@Column(name = "selling_date")
	private LocalDate sellingDate;

	@ManyToOne
	@JoinColumn(name = "aadhar_no", referencedColumnName = "aadhar_no")
	private Customer customer;
}