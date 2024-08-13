package com.app.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FarmerDto;
import com.app.dto.PurchaseDto;
import com.app.exception.AadharNumberNotFound;
import com.app.services.FarmerService;

@RestController
@RequestMapping("/api/farmers")
public class FarmerController {

    @Autowired
    private FarmerService farmerService;

    @PostMapping("/add")
    public ResponseEntity<?> addFarmer(@RequestBody FarmerDto farmerDto) {
        FarmerDto savedFarmer = farmerService.saveFarmer(farmerDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFarmer);
    }

    @PostMapping("/add_purchase")
    public ResponseEntity<?> addPurchaseDetails(@RequestBody PurchaseDto PurchaseDto) {
        try {
            PurchaseDto savedPurchase = farmerService.addPurchase(PurchaseDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedPurchase);
        } catch (AadharNumberNotFound e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/purchases/aadhar/{aadharNumber}")
    public ResponseEntity<?> getPurchasesByAadharNumber(@PathVariable String aadharNumber) {
        try {
            List<PurchaseDto> purchases = farmerService.getPurchasesByAadharNumber(aadharNumber);
            return ResponseEntity.ok(purchases);
        } catch (AadharNumberNotFound e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/purchases/date/{date}")
    public ResponseEntity<?> getPurchasesByDate(@PathVariable String date) {
        try {
            LocalDate purchaseDate = LocalDate.parse(date);
            List<PurchaseDto> purchases = farmerService.getPurchasesByDate(purchaseDate);
            return ResponseEntity.ok(purchases);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    
    @PutMapping("/update/{aadharNumber}")
	public ResponseEntity<?> updateFarmer(@PathVariable String aadharNumber, @RequestBody FarmerDto farmerDto) {
		try {
			FarmerDto farmerdto = farmerService.updateFarmer(aadharNumber, farmerDto);
			return ResponseEntity.status(HttpStatus.OK).body(farmerdto);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@DeleteMapping("/delete/{aadharNumber}")
	public ResponseEntity<?> deleteFarmer(@PathVariable String aadharNumber) {
		try {
			farmerService.deleteFarmer(aadharNumber);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
}