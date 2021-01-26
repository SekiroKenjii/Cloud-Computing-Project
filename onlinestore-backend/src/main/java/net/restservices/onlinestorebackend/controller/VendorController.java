package net.restservices.onlinestorebackend.controller;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.Vendor;
import net.restservices.onlinestorebackend.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class VendorController {

    @Autowired
    private VendorRepository vendorRepository;

    @GetMapping("/vendors")
    public List<Vendor> getAllVendors(){
        return vendorRepository.findAll();
    }

    @PostMapping("/createvendor")
    public Vendor createVendor(@RequestBody Vendor vendor){
        return vendorRepository.save(vendor);
    }

    @PutMapping("/updatevendor/{id}")
    public ResponseEntity<Vendor> updateVendor(@PathVariable long id, @RequestBody Vendor vendorRequest){
        Vendor vendor = vendorRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any vendor with id: " + id));
        vendor.setName(vendorRequest.getName());
        vendor.setContactName(vendorRequest.getContactName());
        vendor.setContactTitle(vendorRequest.getContactTitle());
        vendor.setPhoneNumber(vendorRequest.getPhoneNumber());
        vendor.setAddress(vendorRequest.getAddress());
        vendor.setHomePage(vendorRequest.getHomePage());

        Vendor updateVendor = vendorRepository.save(vendor);
        return ResponseEntity.ok(updateVendor);
    }

    @DeleteMapping("/deletevendor/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVendor(@PathVariable long id){
        Vendor vendor = vendorRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any vendor with id: " + id));

        vendorRepository.delete(vendor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
