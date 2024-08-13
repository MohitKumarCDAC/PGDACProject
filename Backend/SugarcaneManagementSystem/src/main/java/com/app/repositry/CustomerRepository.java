package com.app.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	Customer findByAadharNumber(String aadharNumber);
	
}
