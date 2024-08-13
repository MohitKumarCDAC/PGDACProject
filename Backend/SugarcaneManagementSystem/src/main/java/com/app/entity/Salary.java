package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Salary {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Column(name = "account_number", length = 20)
	private String accountNumber;

	@NotBlank
	@Column(name = "ifsc_code", length = 11)
	private String ifscCode;

	@Column(name = "payment_date")
	private LocalDate paymentDate;

	@Column(name = "salary")
	private Double salary;

	//@ManyToOne
//	@JoinColumn(name = "employee_aadhar_no", referencedColumnName = "aadhar_no")
//	private Employee employee;
	@ManyToOne
    @JoinColumn(name = "employee_id") // This should match the `Employee`'s `id` column
    private Employee employee;
}