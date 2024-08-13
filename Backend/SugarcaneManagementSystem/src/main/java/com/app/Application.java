package com.app;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.dto.PurchaseDto;
import com.app.dto.SalaryDto;
import com.app.dto.SalesDto;
import com.app.entity.Purchase;
import com.app.entity.Salary;
import com.app.entity.Sales;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}


	@Bean
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.addMappings(new PropertyMap<Purchase, PurchaseDto>() {
			@Override
			protected void configure() {
				map(source.getFarmer().getAadharNumber(), destination.getAadharNumber());
			}
		});
		modelMapper.addMappings(new PropertyMap<Sales, SalesDto>() {
			@Override
			protected void configure() {
				map(source.getCustomer().getAadharNumber(), destination.getAadharNumber());
			}
		});
		modelMapper.addMappings(new PropertyMap<Salary, SalaryDto>() {
			@Override
			protected void configure() {
				map(source.getEmployee().getAadharNumber(), destination.getAadharNumber());
			}
		});

		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT)
				.setPropertyCondition(Conditions.isNotNull());
		return modelMapper;
	}
}
