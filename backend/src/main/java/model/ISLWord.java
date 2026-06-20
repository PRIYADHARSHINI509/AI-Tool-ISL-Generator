package com.isl.backend.model;

public class ISLWord {

    private String word;
    private String signDescription;

    public ISLWord(String word, String signDescription) {
        this.word = word;
        this.signDescription = signDescription;
    }

    public String getWord() {
        return word;
    }

    public String getSignDescription() {
        return signDescription;
    }
}