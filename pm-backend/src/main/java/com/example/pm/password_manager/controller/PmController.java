package com.example.pm.password_manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.pm.password_manager.model.Password;
import com.example.pm.password_manager.service.PmService;

@RestController
@CrossOrigin(origins = "*")
public class PmController {
    
    @Autowired
    PmService pmService;

    @GetMapping("/passwords")
    public List<Password> getAllPasswords(){
        return pmService.readPasswords();
    }

    @GetMapping("/passwords/{id}")
    public Password getPasswordById(@PathVariable Long id){
        return pmService.readPasswordById(id);
    }

    @PostMapping("/passwords")
    public String addPassword(@RequestBody Password password){
        return pmService.addPassword(password);
    }

    @DeleteMapping("/passwords/{id}")
    public String delePassword(@PathVariable Long id){
        if(pmService.deletePassword(id))
            return "Delete Successfully";
        return "Not Found";
    }

    @PutMapping("/passwords/{id}")
    public String updatePassword(@PathVariable Long id, @RequestBody Password password){
        return pmService.updatePassword(id, password);
    }
}
