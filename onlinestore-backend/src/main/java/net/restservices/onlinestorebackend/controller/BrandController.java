package net.restservices.onlinestorebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.Brand;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import net.restservices.onlinestorebackend.repository.BrandRepository;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class BrandController {
    @Autowired
    private BrandRepository brandRepository;

    @GetMapping("/brands")
    public List<Brand> getAllBrand(){
        return brandRepository.findAll();
    }

    @PostMapping("/createbrand")
    public Brand createBrand(@RequestBody Brand newBrand){
        return  brandRepository.save(newBrand);
    }


    @PutMapping("/updatebrand/{id}")
    public  ResponseEntity<Brand> updateBrand(@PathVariable Long id,@RequestBody Brand requestBrand)
    {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any category with id: " + id));
        brand.setNameBrand(requestBrand.getNameBrand());

        Brand updateBrand = brandRepository.save(brand);
        return ResponseEntity.ok(updateBrand);
    }

    @DeleteMapping("/deletebrand/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBrand(@PathVariable Long id){
        Brand pro = brandRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        brandRepository.delete(pro);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
