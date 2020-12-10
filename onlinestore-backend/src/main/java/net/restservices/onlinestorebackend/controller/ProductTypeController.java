package net.restservices.onlinestorebackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.ProductType;
import net.restservices.onlinestorebackend.repository.ProductTypeRepository;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class ProductTypeController {
    @Autowired
    private ProductTypeRepository typeRepository;

    @GetMapping("/type")
    public List<ProductType> getAllProductType() {
        return typeRepository.findAll();
    }
    

    @PostMapping("/createtype")
    public ProductType createType(@RequestBody ProductType newType){
        return  typeRepository.save(newType);
    }


    @PutMapping("/updatetype/{id}")
    public  ResponseEntity<ProductType> updateType(@PathVariable Long id,@RequestBody ProductType requestType)
    {
        ProductType type = typeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any category with id: " + id));
        type.setTypeName(requestType.getTypeName());

        ProductType updateType = typeRepository.save(type);
        return ResponseEntity.ok(updateType);
    }

    @DeleteMapping("/deletetype/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteType(@PathVariable Long id){
        ProductType pro = typeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        typeRepository.delete(pro);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
