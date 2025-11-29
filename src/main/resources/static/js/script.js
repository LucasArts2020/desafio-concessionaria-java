const API_URL = '/veiculos';

document.addEventListener('DOMContentLoaded', listarVeiculos);


async function listarVeiculos() {
    try {
        const resposta = await fetch(API_URL);
        if (resposta.status === 401) return alert("Faça login!");
        const carros = await resposta.json();

        const tbody = document.getElementById('tabelaCarros');
        tbody.innerHTML = '';

        carros.forEach(carro => {
            tbody.innerHTML += `
                <tr>
                    <td>${carro.id}</td>
                    <td><strong>${carro.marca}</strong> ${carro.modelo}<br><small class="text-muted">${carro.descricao || ''}</small></td>
                    <td>${carro.ano}</td>
                    <td class="text-success fw-bold">R$ ${carro.preco.toFixed(2)}</td>
                    <td>${carro.vendido ? '<span class="badge bg-danger">Vendido</span>' : '<span class="badge bg-success">Disponível</span>'}</td>
                    <td>
                        <button class="btn btn-sm btn-warning me-1" onclick="prepararEdicao(${carro.id})">Editar</button>
                        <button class="btn btn-sm btn-primary me-1" onclick="trocarStatus(${carro.id})">Status</button>
                        <button class="btn btn-sm btn-danger" onclick="deletarVeiculo(${carro.id})">Deletar</button>
                    </td>
                </tr>
            `;
        });
    } catch (e) { console.error(e); }
}

const form = document.getElementById('formVeiculo');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('veiculoId').value;
    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    const veiculo = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        ano: parseInt(document.getElementById('ano').value),
        preco: parseFloat(document.getElementById('preco').value),
        descricao: document.getElementById('descricao').value,
        vendido: false
    };

    const resposta = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(veiculo)
    });

    if (resposta.ok) {
        limparFormulario();
        listarVeiculos();
    } else {
        alert('Erro ao salvar!');
    }
});


async function prepararEdicao(id) {
    const resposta = await fetch(`${API_URL}/${id}`);
    if (resposta.ok) {
        const carro = await resposta.json();


        document.getElementById('veiculoId').value = carro.id;
        document.getElementById('marca').value = carro.marca;
        document.getElementById('modelo').value = carro.modelo;
        document.getElementById('ano').value = carro.ano;
        document.getElementById('preco').value = carro.preco;
        document.getElementById('descricao').value = carro.descricao;


        document.getElementById('btnSalvar').innerText = 'Atualizar';
        document.getElementById('btnSalvar').classList.replace('btn-success', 'btn-warning');
        document.getElementById('btnCancelar').classList.remove('d-none');
    }
}

function limparFormulario() {
    document.getElementById('formVeiculo').reset();
    document.getElementById('veiculoId').value = '';

    document.getElementById('btnSalvar').innerText = 'Salvar';
    document.getElementById('btnSalvar').classList.replace('btn-warning', 'btn-success');
    document.getElementById('btnCancelar').classList.add('d-none');
}


async function deletarVeiculo(id) {
    if (confirm('Apagar item?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        listarVeiculos();
    }
}

async function trocarStatus(id) {
    await fetch(`${API_URL}/${id}/status`, { method: 'PATCH' });
    listarVeiculos();
}