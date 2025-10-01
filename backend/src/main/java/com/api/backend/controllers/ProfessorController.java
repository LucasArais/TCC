package com.api.backend.controllers;

import com.api.backend.models.Professor;
import com.api.backend.service.S3Service;

import com.api.backend.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/professores")
public class ProfessorController {

    @Autowired
    private ProfessorRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private S3Service s3Service;

    // Criar professor
    @PostMapping
    public ResponseEntity<Professor> createProfessor(@RequestBody Professor professor) {
        if (repository.existsByEmail(professor.getEmail()) || repository.existsByCpf(professor.getCpf())) {
            return ResponseEntity.badRequest().build();
        }

        // Criptografar senha
        professor.setSenha(passwordEncoder.encode(professor.getSenha()));

        Professor novoProfessor = repository.save(professor);
        return ResponseEntity.ok(novoProfessor);
    }

    // Listar todos os professores
    @GetMapping
    public ResponseEntity<List<Professor>> getAllProfessores() {
        return ResponseEntity.ok(repository.findAll());
    }

    // Buscar professor por ID
    @GetMapping("/{id}")
    public ResponseEntity<Professor> getProfessorById(@PathVariable Long id) {
        Optional<Professor> professor = repository.findById(id);
        return professor.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Atualizar professor
    @PutMapping("/{id}")
    public ResponseEntity<Professor> updateProfessor(@PathVariable Long id,
            @RequestBody Professor professorAtualizado) {
        return repository.findById(id)
                .map(professor -> {
                    professor.setNome(professorAtualizado.getNome());
                    professor.setEmail(professorAtualizado.getEmail());
                    professor.setInstituicao(professorAtualizado.getInstituicao());
                    professor.setIdade(professorAtualizado.getIdade());
                    professor.setCpf(professorAtualizado.getCpf());
                    professor.setSenha(passwordEncoder.encode(professorAtualizado.getSenha()));
                    // pdfUrl será atualizado depois pelo endpoint de upload

                    Professor atualizado = repository.save(professor);
                    return ResponseEntity.ok(atualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Deletar professor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfessor(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/upload-pdf")
    public ResponseEntity<String> uploadPdf(@PathVariable Long id, @RequestParam("arquivo") MultipartFile arquivo) {
        return repository.findById(id)
                .map(professor -> {
                    try {
                        String url = s3Service.uploadFile(arquivo);
                        professor.setPdfUrl(url);
                        repository.save(professor);
                        return ResponseEntity.ok(url);
                    } catch (Exception e) {
                        return ResponseEntity.status(500).body("Erro ao enviar arquivo: " + e.getMessage());
                    }
                })
                .orElse(ResponseEntity.notFound().build());
    }

}