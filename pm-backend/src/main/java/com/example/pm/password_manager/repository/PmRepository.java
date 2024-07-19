package com.example.pm.password_manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pm.password_manager.entity.PmEntity;

@Repository
public interface PmRepository extends JpaRepository<PmEntity,Long>{
    

}
