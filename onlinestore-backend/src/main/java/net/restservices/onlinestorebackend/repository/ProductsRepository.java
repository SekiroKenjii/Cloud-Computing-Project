
package net.restservices.onlinestorebackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.restservices.onlinestorebackend.model.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

}
