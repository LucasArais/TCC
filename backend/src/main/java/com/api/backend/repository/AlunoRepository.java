package com.api.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.backend.models.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{

    Optional<Aluno> findByEmail(String email);
    Optional<Aluno> findByCpf(String cpf);
    boolean existsByEmail(String email);
    boolean existsByCpf(String cpf);

}
