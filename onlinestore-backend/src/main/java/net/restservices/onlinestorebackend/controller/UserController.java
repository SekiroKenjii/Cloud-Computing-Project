package net.restservices.onlinestorebackend.controller;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.User;
import net.restservices.onlinestorebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/createuser")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @PutMapping("/updateuser/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userRequest){
        User user = userRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        user.setFirstname(userRequest.getFirstname());
        user.setLastname(userRequest.getLastname());
        user.setEmail(userRequest.getEmail());
        user.setAddress(userRequest.getAddress());
        user.setPhonenumber(userRequest.getPhonenumber());

        User updateUser = userRepository.save(user);
        return ResponseEntity.ok(updateUser);
    }

    @DeleteMapping("/deleteuser/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
        User user = userRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Cannot find any user with id: " + id));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
