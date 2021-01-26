package net.restservices.onlinestorebackend.repository;

import java.util.Optional;
import net.restservices.onlinestorebackend.model.Trademark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrademarkRepository extends JpaRepository<Trademark, Long> {
    Optional<Trademark> findById(Long Id);
}
