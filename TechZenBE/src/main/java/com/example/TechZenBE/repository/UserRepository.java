package com.example.TechZenBE.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.TechZenBE.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
