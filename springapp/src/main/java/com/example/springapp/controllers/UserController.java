package com.example.springapp.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.entities.UserEntity;
import com.example.springapp.models.LoginModel;
import com.example.springapp.repositorys.UserRepository;


@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@CrossOrigin
	@PostMapping("/login")
	public Object userLogin(@Valid @RequestBody LoginModel userLoginDataFromClient, BindingResult theBindingResult) {
		if (theBindingResult.hasErrors()) {
			List<ObjectError> errs = theBindingResult.getAllErrors();
			ArrayList<String> errorMessages = new ArrayList<String>();
			for (ObjectError errorObject: errs) errorMessages.add(errorObject.getDefaultMessage());
			return false;
		}
		List<UserEntity> data = userRepository.findUserByEmailAndPassword(userLoginDataFromClient.getEmail(), userLoginDataFromClient.getPassword());
		if (data != null && data.size() != 0)
			return true;
		return false;
	}
	
	
	@CrossOrigin
	@PostMapping("/signup") 
	public Object userSignup(@RequestBody UserEntity userData) {
		try {
			if (userRepository.findByEmail(userData.getEmail()) == null)  {
				/*Validation Rules*/
				userRepository.save(userData);
			} else return "user already exists";
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
