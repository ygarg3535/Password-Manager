package com.example.pm.password_manager.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="pm")
public class PmEntity{
    
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private String url;
    private String username;
    private String password;
}