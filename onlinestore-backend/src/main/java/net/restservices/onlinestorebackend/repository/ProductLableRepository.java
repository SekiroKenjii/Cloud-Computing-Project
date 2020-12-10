package net.restservices.onlinestorebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.restservices.onlinestorebackend.model.ProductLable;

public interface ProductLableRepository extends JpaRepository<ProductLable, Long> {
    
}
