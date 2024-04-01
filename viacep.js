
async function buscarEnderecoPorCEP (cep) {
    try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok){
        throw new Error('CEP inválido ou não encontrado.');
    }
    const endereco = await response.json();
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('estado').value = endereco.uf; 
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    } catch (error) {
    document.getElementById('resultados').innerHTML = `<p>${error.message}</p>`;
    }
    }

    
// Função para enviar a solicitação de cadastro async function cadastrarUsuario() {

async function cadastrarUsuario(){
const nome = document.getElementById('nome').value; 
const email = document.getElementById('email').value; 
const senha = document.getElementById('senha').value; 
const confirmarSenha = document.getElementById('confirmarSenha').value;
const cep = document.getElementById('cep').value; 
const bairro = document.getElementById('bairro').value; 
const numero = document.getElementById('numero').value;
}