package com.app.repositry;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Customer;
import com.app.entity.Sales;

@Repository
public interface SalesRepository extends JpaRepository<Sales, Long> {
	List<Sales> findByCustomer(Customer customer);

	List<Sales> findBySellingDate(LocalDate sellingDate);
}