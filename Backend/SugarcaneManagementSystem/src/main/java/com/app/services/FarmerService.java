package com.app.services;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.FarmerDto;
import com.app.dto.PurchaseDto;

public interface FarmerService {
	public FarmerDto saveFarmer(FarmerDto farmerDto);

	public PurchaseDto addPurchase(PurchaseDto purchaseDto);

	public List<PurchaseDto> getPurchasesByAadharNumber(String aadharNumber);

	public List<PurchaseDto> getPurchasesByDate(LocalDate purchaseDate);

	FarmerDto updateFarmer(String aadharNumber, FarmerDto farmerDto);

	void deleteFarmer(String aadharNumber);

}
