package net.restservices.onlinestorebackend.repository;

import net.restservices.onlinestorebackend.model.ProductTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductTagRepository extends JpaRepository<ProductTag, Long> {

}
