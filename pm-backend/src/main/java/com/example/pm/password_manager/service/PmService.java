package com.example.pm.password_manager.service;

import java.util.List;

import com.example.pm.password_manager.model.Password;

public interface PmService{
    String addPassword(Password password);
    List<Password> readPasswords();
    boolean deletePassword(Long id);
    String updatePassword(Long id,Password password);
    Password readPasswordById(Long id);
}
