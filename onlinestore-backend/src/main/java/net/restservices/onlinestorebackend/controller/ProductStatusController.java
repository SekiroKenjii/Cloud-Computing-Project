package net.restservices.onlinestorebackend.controller;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.ProductStatus;
import net.restservices.onlinestorebackend.repository.ProductStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class ProductStatusController {

    @Autowired
    private ProductStatusRepository productStatusRepository;

    @GetMapping("/productstatuses")
    public List<ProductStatus> getAllProdStatuses() {
        return productStatusRepository.findAll();
    }

    @PostMapping("/createproductstatus")
    public ProductStatus createProdStatuses(@RequestBody ProductStatus productStatus) {
        return productStatusRepository.save(productStatus);
    }

    @PutMapping("/updateproductstatus/{id}")
    public ResponseEntity<ProductStatus> updateProdStatuses(@PathVariable long id,
            @RequestBody ProductStatus prodStatusRequest) {
        ProductStatus productStatus = productStatusRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cannot find any product status with id: " + id));

        productStatus.setName(prodStatusRequest.getName());
        productStatus.setDescription(prodStatusRequest.getDescription());

        ProductStatus updateProductStatus = productStatusRepository.save(productStatus);
        return ResponseEntity.ok(updateProductStatus);
    }

    @DeleteMapping("/deleteproductstatus/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProdStatuses(@PathVariable long id) {
        ProductStatus productStatus = productStatusRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cannot find any product status with id: " + id));

        productStatusRepository.delete(productStatus);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
