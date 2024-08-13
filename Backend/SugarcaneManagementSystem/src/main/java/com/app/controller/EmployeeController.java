package com.app.controller;

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

import com.app.dto.EmployeeDto;
import com.app.dto.SalaryDto;
import com.app.exception.AadharNumberNotFound;
import com.app.services.EmployeeServiceImpl;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

	@Autowired
	private EmployeeServiceImpl service;

	@PostMapping("/add")
	public ResponseEntity<?> addEmployee(@RequestBody EmployeeDto employeeDto) {
		try {
			EmployeeDto savedEmployee = service.saveEmployeeDetails(employeeDto);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
		} catch (AadharNumberNotFound e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PostMapping("/add-salary")
	public ResponseEntity<?> addAccountantSalary(@RequestBody SalaryDto salaryDto) {
		try {
			SalaryDto savedSalary = service.addEmployeeSalary(salaryDto);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedSalary);
		} catch (AadharNumberNotFound e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@GetMapping("/salaries/{aadharNumber}")
	public ResponseEntity<?> getAllSalaries(@PathVariable String aadharNumber) {
		try {
			List<SalaryDto> salaries = service.getAllSalariesByAadharNumber(aadharNumber);
			return ResponseEntity.ok(salaries);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PutMapping("/update/{aadharNumber}")
	public ResponseEntity<?> updateEmployeeDetails(@PathVariable String aadharNumber,
			@RequestBody EmployeeDto employeeDto) {
		try {
			EmployeeDto updatedEmployee = service.updateEmployee(aadharNumber, employeeDto);
			return ResponseEntity.ok(updatedEmployee);
		} catch (AadharNumberNotFound e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	 @DeleteMapping("/delete/{aadharNumber}")
	    public ResponseEntity<?> deleteEmployee(@PathVariable String aadharNumber) {
	        try {
	            service.deleteEmployee(aadharNumber);
	            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	        } catch (AadharNumberNotFound e) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	        }
	    }
}
