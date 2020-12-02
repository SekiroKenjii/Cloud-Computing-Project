package net.restservices.onlinestorebackend.controller;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.Category;
import net.restservices.onlinestorebackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/categories")
    public List<Category> getAddCategories(){
        return categoryRepository.findAll();
    }

    @PostMapping("/createcategory")
    public Category createCategory(@RequestBody Category category){
        return categoryRepository.save(category);
    }

    @PutMapping("/updatecategory/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable long id, @RequestBody Category categoryRequest){
        Category category = categoryRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any category with id: " + id));

        category.setName(categoryRequest.getName());
        category.setStatus(categoryRequest.getStatus());

        Category updateCategory = categoryRepository.save(category);
        return ResponseEntity.ok(updateCategory);
    }

    @DeleteMapping("/deletecategory/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable long id){
        Category category = categoryRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any category with id: " + id));

        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
