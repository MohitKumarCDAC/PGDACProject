package com.app.services;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.CustomerDto;
import com.app.dto.SalesDto;

public interface CustomerService {
	CustomerDto addCustomer(CustomerDto customers);

	SalesDto addSalesData(SalesDto salesDto);

	List<SalesDto> getSalesByAadharNumber(String aadharNumber);

	List<SalesDto> getSalesByDate(LocalDate date);
	
	CustomerDto updateCustomer(String aadharNo, CustomerDto customerDto);

	void deleteCustomer(String aadharNumber);
}
