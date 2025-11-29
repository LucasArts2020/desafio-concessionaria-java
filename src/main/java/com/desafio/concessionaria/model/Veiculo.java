package com.desafio.concessionaria.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;


@Data
@Entity
@Table(name = "veiculos")

public class Veiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String marca;

    @Column(nullable = false)
    private String modelo;

    @Column(nullable = false)
    private Integer ano;

    @Column(nullable = false)
    private BigDecimal preco;

    private String descricao;

    private boolean vendido = false;

}
