package com.app.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Farmer;

public interface FarmerRepository extends JpaRepository<Farmer, Long> {
	Farmer findByAadharNumber(String aadharNumber);
	
}