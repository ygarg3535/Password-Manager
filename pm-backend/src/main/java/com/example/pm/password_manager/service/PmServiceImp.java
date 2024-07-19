package com.example.pm.password_manager.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pm.password_manager.entity.PmEntity;
import com.example.pm.password_manager.model.Password;
import com.example.pm.password_manager.repository.PmRepository;

@Service
public class PmServiceImp implements PmService {

    @Autowired
    PmRepository pmRepository;

    @Override
    public String addPassword(Password password) {
        PmEntity pmEntity = new PmEntity();
        BeanUtils.copyProperties(password, pmEntity);
        pmRepository.save(pmEntity);
        return "Saved Successfully";
    }

    @Override
    public boolean deletePassword(Long id) {
        PmEntity pass = pmRepository.findById(id).get();
        pmRepository.delete(pass);
        return true;
    }

    @Override
    public Password readPasswordById(Long id) {
        PmEntity pmEntity = pmRepository.findById(id).get();
        Password password = new Password();
        BeanUtils.copyProperties(pmEntity, password);
        return password;
    }

    @Override
    public List<Password> readPasswords() {
        List<PmEntity> passList = pmRepository.findAll();
        List<Password> passwords = new ArrayList<>();
        for(PmEntity pmEntity : passList){
            Password password = new Password();
            password.setId(pmEntity.getId());
            password.setUrl(pmEntity.getUrl());
            password.setUsername(pmEntity.getUsername());
            password.setPassword(pmEntity.getPassword());
            passwords.add(password);
        } 
        return passwords;
    }

    @Override
    public String updatePassword(Long id, Password password) {
        PmEntity existingPass = pmRepository.findById(id).get();

        existingPass.setUrl(password.getUrl());
        existingPass.setUsername(password.getUsername());
        existingPass.setPassword(password.getPassword());
        pmRepository.save(existingPass);
        return "Update Successfully";
    }
    
}
