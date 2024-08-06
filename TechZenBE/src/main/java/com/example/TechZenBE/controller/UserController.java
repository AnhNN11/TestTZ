package com.example.TechZenBE.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.TechZenBE.dtos.ApiResponse;
import com.example.TechZenBE.exception.AppException;
import com.example.TechZenBE.exception.ErrorCode;
import com.example.TechZenBE.model.User;
import com.example.TechZenBE.repository.UserRepository;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    ApiResponse<User> newUser(@Valid @RequestBody User newUser) {
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userRepository.save(newUser));
        return apiResponse;
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User with id " + id + " not found.");
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted success.";
    }

}
