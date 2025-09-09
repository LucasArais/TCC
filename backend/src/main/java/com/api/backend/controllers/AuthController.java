package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.api.backend.dto.AuthenticationDTO;
import com.api.backend.dto.RegisterDTO;
import com.api.backend.models.Aluno;
import com.api.backend.repository.AlunoRepository;
import com.api.backend.security.JwtUtil;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AlunoRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // Endpoint de registro
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO data) {
        if (repository.existsByEmail(data.email()) || repository.existsByCpf(data.cpf())) {
            return ResponseEntity.badRequest().body("Email ou CPF já cadastrado");
        }

        // Cria aluno com senha criptografada
        Aluno aluno = new Aluno(
                data.nome(),
                data.email(),
                data.instituicao(),
                data.idade(),
                data.cpf(),
                passwordEncoder.encode(data.senha()));

        repository.save(aluno);
        return ResponseEntity.ok("Aluno registrado com sucesso");
    }

    // Endpoint de login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthenticationDTO data) {
        Optional<Aluno> alunoOpt = repository.findByEmail(data.email());

        if (alunoOpt.isEmpty()) {
            return ResponseEntity.status(401).body("Email ou senha incorretos");
        }

        Aluno aluno = alunoOpt.get();

        if (!passwordEncoder.matches(data.senha(), aluno.getSenha())) {
            return ResponseEntity.status(401).body("Email ou senha incorretos");
        }

        String token = jwtUtil.generateToken(aluno.getEmail());

        return ResponseEntity.ok(token);
    }
}
