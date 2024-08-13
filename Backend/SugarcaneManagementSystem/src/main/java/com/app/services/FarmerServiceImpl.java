package com.app.services;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.FarmerDto;
import com.app.dto.PurchaseDto;
import com.app.entity.Farmer;
import com.app.entity.Purchase;
import com.app.entity.User;
import com.app.exception.AadharNumberNotFound;
import com.app.repositry.FarmerRepository;
import com.app.repositry.PurchaseRepository;
import com.app.repositry.UserRepository;

@Service
public class FarmerServiceImpl implements FarmerService {

	@Autowired
	private FarmerRepository farmerRepository;

	@Autowired
	private PurchaseRepository purchaseRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper mapper;

	public FarmerDto saveFarmer(FarmerDto farmerDto) {
		// Fetch the employee by Aadhar number
		User user = userRepository.findByAadharNumber(farmerDto.getAadharNumber());
		if (user == null) {
			throw new AadharNumberNotFound("Farmer with Aadhar number " + farmerDto.getAadharNumber() + " not found.");
		}
		Farmer farmer = mapper.map(farmerDto, Farmer.class);
		Farmer savedFarmer = farmerRepository.save(farmer);
		return mapper.map(savedFarmer, FarmerDto.class);
	}

	public PurchaseDto addPurchase(PurchaseDto purchaseDto) {
		Farmer farmer = farmerRepository.findByAadharNumber(purchaseDto.getAadharNumber());
		if (farmer == null) {
			throw new AadharNumberNotFound(
					"Farmer with Aadhar number " + purchaseDto.getAadharNumber() + " not found.");
		}

		Purchase purchase = mapper.map(purchaseDto, Purchase.class);
		purchase.setFarmer(farmer);
		Purchase savedPurchase = purchaseRepository.save(purchase);
		return mapper.map(savedPurchase, PurchaseDto.class);
	}

	public List<PurchaseDto> getPurchasesByAadharNumber(String aadharNumber) {
		Farmer farmer = farmerRepository.findByAadharNumber(aadharNumber);
		if (farmer == null) {
			throw new AadharNumberNotFound("Farmer with Aadhar number " + aadharNumber + " not found.");
		}

		List<Purchase> purchases = purchaseRepository.findByFarmer(farmer);
		return purchases.stream().map(purchase -> mapper.map(purchase, PurchaseDto.class)).collect(Collectors.toList());
	}

	public List<PurchaseDto> getPurchasesByDate(LocalDate date) {
		List<Purchase> purchases = purchaseRepository.findByPurchaseDate(date);
		return purchases.stream().map(purchase -> mapper.map(purchase, PurchaseDto.class)).collect(Collectors.toList());
	}
	
	@Override
	public FarmerDto updateFarmer(String aadharNumber, FarmerDto farmerDto) {
		Farmer farmer = farmerRepository.findByAadharNumber(aadharNumber);
		if(farmer == null) {
			throw new AadharNumberNotFound("Farmer with aadhar number " + aadharNumber + " not found.");
		}
		farmer.setFarmerName(farmerDto.getFarmerName());
		farmerRepository.save(farmer);
		return mapper.map(farmer, FarmerDto.class);
	}

	@Override
	public void deleteFarmer(String aadharNumber) {
		// TODO Auto-generated method stub
		Farmer farmer = farmerRepository.findByAadharNumber(aadharNumber);
		if(farmer == null) {
			throw new AadharNumberNotFound("Farmer with aadhar number " + aadharNumber + " not found.");
		}
		farmerRepository.delete(farmer);
		}
	
}