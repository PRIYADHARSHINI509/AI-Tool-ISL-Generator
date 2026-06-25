package com.isl.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isl.backend.service.ISLService;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @Autowired
    private ISLService islService;

    @GetMapping("/")
    public String home() {
        return "ISL Generator Backend Running Successfully";
    }

    @GetMapping("/translate")
    public String translate(@RequestParam String word) {
        return islService.translateWord(word);
    }
}