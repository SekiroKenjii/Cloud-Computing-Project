package net.restservices.onlinestorebackend.controller;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.Products;
import net.restservices.onlinestorebackend.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class ProductsController {
    @Autowired
    private ProductsRepository proRepository;

    @GetMapping("/products")
    public List<Products> getAllProducts(){
        return proRepository.findAll();
    }

    @PostMapping("/createproducts")
    public Products createProducts(@RequestBody Products pro){
        return proRepository.save(pro);
    }

    @PutMapping("/updatproducts/{id}")
    public ResponseEntity<Products> updateProduct(@PathVariable Long id, @RequestBody Products proRequest){
        Products pro = proRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        pro.setProductName(proRequest.getProductName());

        pro.setVendorName(proRequest.getVendorName());
        pro.setBrandName(proRequest.getBrandName());
        pro.setTypeName(proRequest.getTypeName());
        pro.setLableName(proRequest.getLableName());
        pro.setPrice(proRequest.getPrice());

        Products updateProducts = proRepository.save(pro);
        return ResponseEntity.ok(updateProducts);
    }

    @DeleteMapping("/deleteproducts/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id){
        Products pro = proRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        proRepository.delete(pro);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
