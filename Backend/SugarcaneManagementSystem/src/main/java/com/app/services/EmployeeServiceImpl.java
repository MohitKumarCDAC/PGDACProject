package com.app.services;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.EmployeeDto;
import com.app.dto.SalaryDto;
import com.app.entity.Employee;
import com.app.entity.Salary;
import com.app.entity.User;
import com.app.exception.AadharNumberNotFound;
import com.app.exception.SalaryException;
import com.app.repositry.EmployeeRepository;
import com.app.repositry.SalaryRepository;
import com.app.repositry.UserRepository;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private SalaryRepository salaryRepository;

	@Autowired
	private ModelMapper mapper;

	public EmployeeDto saveEmployeeDetails(EmployeeDto employeeDto) {
		// Fetch the employee by Aadhar number
		User employee = userRepository.findByAadharNumber(employeeDto.getAadharNumber());
		if (employee == null) {
			throw new AadharNumberNotFound(
					"Employee with Aadhar number " + employeeDto.getAadharNumber() + " not found.");
		}

		// Convert DTO to entity
		Employee employeeDetails = mapper.map(employeeDto, Employee.class);
		// Save employee details to database
		Employee savedEmp = employeeRepository.save(employeeDetails);

		return mapper.map(savedEmp, EmployeeDto.class);
	}

	public Employee getEmployeeDetailsByAadharNumber(String aadharNumber) {
		return employeeRepository.findByAadharNumber(aadharNumber);
	}

	public SalaryDto addEmployeeSalary(SalaryDto salarydto) {
		Employee employee = employeeRepository.findByAadharNumber(salarydto.getAadharNumber());
		if (employee == null) {
			throw new AadharNumberNotFound(
					"Accountant with Aadhar number " + salarydto.getAadharNumber() + " not found.");
		}

		// Extract month and year from payment date
		LocalDate paymentDate = salarydto.getPaymentDate();
		int month = paymentDate.getMonthValue();
		int year = paymentDate.getYear();

		// Check if a salary record for the same month and year already exists
		List<Salary> existingSalaries = salaryRepository.findByEmployeeAndPaymentDateMonthAndPaymentDateYear(employee,
				month, year);
		if (!existingSalaries.isEmpty()) {
			throw new SalaryException("Salary already added for this month.");
		}

		Salary salaryDetails = mapper.map(salarydto, Salary.class);
		salaryDetails.setEmployee(employee); // Ensure this is set

		Salary savedSalary = salaryRepository.save(salaryDetails);
		return mapper.map(savedSalary, SalaryDto.class);
	}

	public List<SalaryDto> getAllSalariesByAadharNumber(String aadharNumber) {
		Employee employee = employeeRepository.findByAadharNumber(aadharNumber);
		if (employee == null) {
			throw new AadharNumberNotFound("Employee with Aadhar number " + aadharNumber + " does not exist.");
		}
		List<Salary> salaries = salaryRepository.findByEmployee(employee);
		return salaries.stream().map(salary -> mapper.map(salary, SalaryDto.class)).collect(Collectors.toList());
	}

	
	public EmployeeDto updateEmployee(String aadharNumber, EmployeeDto dto) {
		// Fetch the employee by Aadhar number
		Employee existingEmployee = employeeRepository.findByAadharNumber(aadharNumber);
		if (existingEmployee == null) {
			throw new AadharNumberNotFound("Employee with Aadhar number " + aadharNumber + " not found.");
		}

		// Update the existing employee details with the new data
		existingEmployee.setName(dto.getName());
		existingEmployee.setAadharNumber(dto.getAadharNumber());
		// Add any other fields that need to be updated

		// Save the updated employee details to the database
		Employee updatedEmployee = employeeRepository.save(existingEmployee);
		return mapper.map(updatedEmployee, EmployeeDto.class);
	}

	public void deleteEmployee(String aadharNumber) {
		Employee employee = employeeRepository.findByAadharNumber(aadharNumber);
		if(employee == null) {
			throw new AadharNumberNotFound("Employee with Aadhar number " + aadharNumber + " not found.");
		}
		
		employeeRepository.delete(employee);		
	}




}
