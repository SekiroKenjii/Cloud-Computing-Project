package net.restservices.onlinestorebackend.controller;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.ProductTag;
import net.restservices.onlinestorebackend.repository.ProductTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class ProductTagController {

    @Autowired
    private ProductTagRepository productTagRepository;

    @GetMapping("/producttags")
    public List<ProductTag> getAllCategories() {
        return productTagRepository.findAll();
    }

    @PostMapping("/createproducttag")
    public ProductTag createProductTag(@RequestBody ProductTag productTag) {
        return productTagRepository.save(productTag);
    }

    @PutMapping("/updateproducttag/{id}")
    public ResponseEntity<ProductTag> updateCategory(@PathVariable long id, @RequestBody ProductTag productTagRequest) {
        ProductTag productTag = productTagRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cannot find any Product Tag with id: " + id));

        productTag.setName(productTagRequest.getName());
        productTag.setStatus(productTagRequest.getStatus());

        ProductTag updateProductTag = productTagRepository.save(productTag);
        return ResponseEntity.ok(updateProductTag);
    }

    @DeleteMapping("/deleteproducttag/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProductTag(@PathVariable long id) {
        ProductTag productTag = productTagRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cannot find any Product Tag with id: " + id));

        productTagRepository.delete(productTag);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
