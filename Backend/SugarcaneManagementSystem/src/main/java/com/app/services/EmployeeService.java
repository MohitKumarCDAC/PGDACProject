package com.app.services;

import java.util.List;

import com.app.dto.EmployeeDto;
import com.app.dto.SalaryDto;
import com.app.entity.Employee;

public interface EmployeeService {
	EmployeeDto saveEmployeeDetails(EmployeeDto dto);

	Employee getEmployeeDetailsByAadharNumber(String aadharNumber);

	SalaryDto addEmployeeSalary(SalaryDto salarydto);

	List<SalaryDto> getAllSalariesByAadharNumber(String aadharNumber);
	
    EmployeeDto updateEmployee(String aadharNumber, EmployeeDto dto);
	
	void deleteEmployee(String aadharNumber);
}
