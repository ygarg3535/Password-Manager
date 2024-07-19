package com.example.pm.password_manager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Password {
    private Long id;
    private String url;
    private String username;
    private String password;
    
}
