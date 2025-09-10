package com.api.backend.service;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {

    public String generateTemporaryPassword() {
        return RandomStringUtils.randomAlphanumeric(8); // senha de 8 caracteres
    }
}
