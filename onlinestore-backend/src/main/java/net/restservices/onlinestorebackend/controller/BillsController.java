package net.restservices.onlinestorebackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.Bills;
import net.restservices.onlinestorebackend.model.Products;
import net.restservices.onlinestorebackend.repository.BillsRepository;
import net.restservices.onlinestorebackend.repository.ProductsRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class BillsController {
    @Autowired
    private BillsRepository billsRepository;

    @Autowired
    private ProductsRepository proRepository;

    @GetMapping("/bills")
    public List<Bills> getAllBills() {
        return billsRepository.findAll();
    }

    @PostMapping("/createbills")
    public Bills createBills(@RequestBody Bills bills) {
        long id = bills.getProductId();
        Optional<Products> priceProduct = proRepository.findById(id);
        int total = priceProduct.get().getPrice() * bills.getQuantity();
        bills.setTotalPrice(total);
        return billsRepository.save(bills);
    }

    @PutMapping("/updatebills/{id}")
    public ResponseEntity<Bills> updateBills(@PathVariable Long id, @RequestBody Bills billsRequest)
    {
        Bills bill = billsRepository.findById(id)
            .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        bill.setProductId(billsRequest.getProductId());
        bill.setQuantity(billsRequest.getQuantity());
        bill.setType(billsRequest.getType());
        long idPro = billsRequest.getProductId();
        Optional<Products> priceProduct = proRepository.findById(idPro);
        int total = priceProduct.get().getPrice() *billsRequest.getQuantity();
        bill.setTotalPrice(total);

        Bills updateBills = billsRepository.save(bill);
        return ResponseEntity.ok(updateBills);
    }
    
}
