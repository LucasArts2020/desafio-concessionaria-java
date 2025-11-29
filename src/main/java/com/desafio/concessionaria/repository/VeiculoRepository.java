package com.desafio.concessionaria.repository;

import com.desafio.concessionaria.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
    // Só isso! O JpaRepository já contém os métodos prontos:
    // .save() -> Salva
    // .findAll() -> Lista todos
    // .findById() -> Busca um
    // .delete() -> Apaga
}