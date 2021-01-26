package net.restservices.onlinestorebackend.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import net.restservices.onlinestorebackend.exception.ResourceNotFoundException;
import net.restservices.onlinestorebackend.model.Trademark;
import net.restservices.onlinestorebackend.repository.TrademarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class TrademarkController {

    @Autowired
    private TrademarkRepository trademarkRepository;

    @GetMapping("/trademarks")
    public List<Trademark> getAllTrademarks() {
        return trademarkRepository.findAll();
    }

    @GetMapping("/gettrademark/{id}")
    public Trademark getTrademark(@PathVariable("id") long id) throws IOException {
        final Optional<Trademark> trademark = trademarkRepository.findById(id);
        Trademark trade = new Trademark(trademark.get().getName(), trademark.get().getLogoName(),
                decompressBytes(trademark.get().getLogoByte()), trademark.get().getStatus());
        return trade;
    }

    @PostMapping("/createtrademark")
    public BodyBuilder createTrademark(@RequestParam("imageFile") MultipartFile file,
            @RequestPart("dataRequest") Trademark tm) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        Trademark trademark = new Trademark(tm.getName(), file.getOriginalFilename(), compressBytes(file.getBytes()),
                tm.getStatus());
        trademarkRepository.save(trademark);
        return ResponseEntity.status(HttpStatus.OK);
    }

    @DeleteMapping("/deletetrademark/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTrademark(@PathVariable long id) {
        Trademark trademark = trademarkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cannot find any Trademark with id: " + id));

        trademarkRepository.delete(trademark);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }

    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }
}
