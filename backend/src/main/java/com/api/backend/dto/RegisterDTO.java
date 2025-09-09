package com.api.backend.dto;

public record RegisterDTO(
    String nome,
    String email,
    String senha,
    String instituicao,
    Integer idade,
    String cpf
) {}
