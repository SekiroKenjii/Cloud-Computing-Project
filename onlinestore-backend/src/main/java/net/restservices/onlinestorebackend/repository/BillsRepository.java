package net.restservices.onlinestorebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.restservices.onlinestorebackend.model.Bills;

@Repository
public interface BillsRepository  extends JpaRepository<Bills, Long>{
    
}
