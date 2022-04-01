package com.example.springapp.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springapp.entities.AdminEntity;

public interface AdminRepository extends JpaRepository<AdminEntity, Long> {
	@Query(value = "SELECT * FROM AdminOrders", nativeQuery = true)
	public List<AdminEntity> findAllOrders();
}
