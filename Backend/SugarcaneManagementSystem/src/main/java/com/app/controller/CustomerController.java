package com.app.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CustomerDto;
import com.app.dto.SalesDto;
import com.app.exception.AadharNumberNotFound;
import com.app.services.CustomerServiceImpl;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

	@Autowired
	private CustomerServiceImpl custdetailsServices;

	@PostMapping("/add")
	public ResponseEntity<?> addCustomer(@RequestBody CustomerDto customerDto) {
		CustomerDto customer = custdetailsServices.addCustomer(customerDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(customer);
	}

	@PostMapping("/add_sales")
	public ResponseEntity<?> addSellingDetails(@RequestBody SalesDto salesDto) {
		try {
			SalesDto savesell = custdetailsServices.addSalesData(salesDto);
			return ResponseEntity.status(HttpStatus.CREATED).body(savesell);
		} catch (AadharNumberNotFound e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@GetMapping("/sells/aadhar/{aadharNumber}")
	public ResponseEntity<?> getSellsByAadharNumber(@PathVariable String aadharNumber) {
		try {
			List<SalesDto> sells = custdetailsServices.getSalesByAadharNumber(aadharNumber);
			return ResponseEntity.ok(sells);
		} catch (AadharNumberNotFound e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@GetMapping("/sells/date/{date}")
	public ResponseEntity<?> getSellsDetailsByDate(@PathVariable String date) {
		try {
			LocalDate sellDate = LocalDate.parse(date);
			List<SalesDto> sells = custdetailsServices.getSalesByDate(sellDate);
			return ResponseEntity.ok(sells);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	
	
	@PutMapping("/update/{aadharNumber}")
	public ResponseEntity<?> updateCustomer(@PathVariable String aadharNumber, @RequestBody CustomerDto customerDto) {
		try {
			CustomerDto updatedCustomer =custdetailsServices.updateCustomer(aadharNumber, customerDto);
			return ResponseEntity.ok(updatedCustomer);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@DeleteMapping("/delete/{aadharNumber}")
	public ResponseEntity<?> deleteCustomer(@PathVariable String aadharNumber) {
		try {
			custdetailsServices.deleteCustomer(aadharNumber);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}


}
