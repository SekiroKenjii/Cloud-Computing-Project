package net.restservices.onlinestorebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.restservices.onlinestorebackend.model.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand,Long>{
    
}
