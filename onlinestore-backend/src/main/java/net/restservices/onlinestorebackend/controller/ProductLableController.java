package net.restservices.onlinestorebackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.ProductLable;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import net.restservices.onlinestorebackend.repository.ProductLableRepository;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class ProductLableController {
    @Autowired
    private ProductLableRepository lableRepository;

    @GetMapping("/lable")
    public List<ProductLable> getAllLable() {
        return lableRepository.findAll();
    }
    

    @PostMapping("/createlable")
    public ProductLable createLable(@RequestBody ProductLable newLable){
        return  lableRepository.save(newLable);
    }


    @PutMapping("/updatelable/{id}")
    public  ResponseEntity<ProductLable> updateLable(@PathVariable Long id,@RequestBody ProductLable requestType)
    {
        ProductLable type = lableRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any category with id: " + id));
        type.setLable(requestType.getLable());

        ProductLable updateType = lableRepository.save(type);
        return ResponseEntity.ok(updateType);
    }

    @DeleteMapping("/deletelable/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBrand(@PathVariable Long id){
        ProductLable pro = lableRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        lableRepository.delete(pro);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
