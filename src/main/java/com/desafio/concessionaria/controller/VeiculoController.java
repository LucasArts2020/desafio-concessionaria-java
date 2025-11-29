package com.desafio.concessionaria.controller;

import com.desafio.concessionaria.model.Veiculo;
import com.desafio.concessionaria.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoRepository repository;

    @GetMapping
    public List<Veiculo> listarTodos() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Veiculo buscarPorId(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping
    public Veiculo cadastrar(@RequestBody Veiculo veiculo) {
        return repository.save(veiculo);
    }

    @PutMapping("/{id}")
    public Veiculo atualizar(@PathVariable Long id, @RequestBody Veiculo dadosAtualizados) {

        Veiculo veiculoExistente = repository.findById(id).orElse(null);

        if (veiculoExistente != null) {

            veiculoExistente.setMarca(dadosAtualizados.getMarca());
            veiculoExistente.setModelo(dadosAtualizados.getModelo());
            veiculoExistente.setAno(dadosAtualizados.getAno());
            veiculoExistente.setPreco(dadosAtualizados.getPreco());
            veiculoExistente.setDescricao(dadosAtualizados.getDescricao());
            veiculoExistente.setVendido(dadosAtualizados.isVendido());


            return repository.save(veiculoExistente);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PatchMapping("/{id}/status")
    public Veiculo atualizarStatus(@PathVariable Long id) {
        Veiculo veiculo = repository.findById(id).orElse(null);
        if (veiculo != null) {
            veiculo.setVendido(!veiculo.isVendido());
            return repository.save(veiculo);
        }
        return null;
    }


}
