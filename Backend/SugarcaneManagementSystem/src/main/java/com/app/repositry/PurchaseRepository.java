package com.app.repositry;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Farmer;
import com.app.entity.Purchase;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
	List<Purchase> findByFarmer(Farmer farmer);

	List<Purchase> findByPurchaseDate(LocalDate purchaseDate);
}
