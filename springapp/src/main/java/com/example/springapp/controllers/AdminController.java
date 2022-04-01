package com.example.springapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.entities.AdminEntity;
import com.example.springapp.repositorys.AdminRepository;

@RestController	
//@CrossOrigin(origins = "http://localhost:4200/admin/Orders")
public class AdminController {
	@Autowired
	AdminRepository adminRepository;
	
	@CrossOrigin
	@GetMapping("/adminOrders")
	public List<AdminEntity> getAllOrders() {
		return adminRepository.findAll();
	}
}
