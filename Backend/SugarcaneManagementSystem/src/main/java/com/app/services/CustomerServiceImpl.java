package com.app.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CustomerDto;
import com.app.dto.SalesDto;
import com.app.entity.Customer;
import com.app.entity.Sales;
import com.app.entity.User;
import com.app.exception.AadharNumberNotFound;
import com.app.repositry.CustomerRepository;
import com.app.repositry.SalesRepository;
import com.app.repositry.UserRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public CustomerDto addCustomer(CustomerDto customersdto) {
		User customer = userRepo.findByAadharNumber(customersdto.getAadharNumber());
		if (customer == null) {
			throw new AadharNumberNotFound(
					"Customer with Aadhar number " + customersdto.getAadharNumber() + " not found.");
		}
		Customer custDetails = mapper.map(customersdto, Customer.class);
		Customer details = customerRepo.save(custDetails);
		// Save employee details to database
		return mapper.map(details, CustomerDto.class);
	}

	
	public SalesDto addSalesData(SalesDto salesDto) {
		Customer customer = customerRepo.findByAadharNumber(salesDto.getAadharNumber());
		if (customer == null) {
			throw new AadharNumberNotFound("Customer with Aadhar number " + salesDto.getAadharNumber() + " not found.");
		}

		Sales sales = mapper.map(salesDto, Sales.class);
		sales.setCustomer(customer);

//		System.out.println("Before Saving:" + salesDto.getAadharNumber());

		Sales savedSales = salesRepo.save(sales);
		return mapper.map(savedSales, SalesDto.class);
	}

	public List<SalesDto> getSalesByAadharNumber(String aadharNumber) {
		Customer customer = customerRepo.findByAadharNumber(aadharNumber);
		if (customer == null) {
			throw new AadharNumberNotFound("Customer with Aadhar number " + aadharNumber + " not found.");
		}

		List<Sales> sell = salesRepo.findByCustomer(customer);
		return sell.stream().map(selling -> mapper.map(selling, SalesDto.class)).collect(Collectors.toList());
	}

	public List<SalesDto> getSalesByDate(LocalDate date) {
		List<Sales> selling = salesRepo.findBySellingDate(date);
		System.out.println("Selling details fetched: " + selling);
		return selling.stream().map(Sales -> {
			SalesDto dto = mapper.map(Sales, SalesDto.class);
			System.out.println("Mapped DTO: " + dto);
			return dto;
		}).collect(Collectors.toList());
	}
	
	public CustomerDto updateCustomer(String aadharNumber, CustomerDto customerDto) {
		Optional<Customer> existingCustomer = Optional.of(customerRepo.findByAadharNumber(aadharNumber));
		if (!existingCustomer.isPresent()) {
			throw new AadharNumberNotFound("Customer with ID " + aadharNumber + " not found.");
		}
		Customer customer = existingCustomer.get();
		mapper.map(customerDto, customer);
		Customer updatedCustomer = customerRepo.save(customer);
		return mapper.map(updatedCustomer, CustomerDto.class);
	}

	// Delete a customer
	public void deleteCustomer(String aadharNumber) {
		Customer customer=customerRepo.findByAadharNumber(aadharNumber);
		if(customer== null)
		{
			throw new AadharNumberNotFound("Customer with AadharNumber"+aadharNumber+"Not Found");
		
		}
		customerRepo.delete(customer);
	}

}
