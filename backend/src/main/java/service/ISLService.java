package com.isl.backend.service;

import org.springframework.stereotype.Service;

@Service
public class ISLService {

    public String translateWord(String word) {

        switch (word.toLowerCase()) {

            case "hello":
                return "ISL Sign: Hello Gesture";

            case "thankyou":
                return "ISL Sign: Thank You Gesture";

            case "welcome":
                return "ISL Sign: Welcome Gesture";

            case "yes":
                return "ISL Sign: Yes Gesture";

            case "no":
                return "ISL Sign: No Gesture";

            default:
                return "Word not found in ISL Database";
        }
    }
}