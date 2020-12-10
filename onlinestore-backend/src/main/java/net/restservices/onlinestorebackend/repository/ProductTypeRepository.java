package net.restservices.onlinestorebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.restservices.onlinestorebackend.model.ProductType;

@Repository
public interface ProductTypeRepository extends JpaRepository<ProductType, Long> {
    
}
