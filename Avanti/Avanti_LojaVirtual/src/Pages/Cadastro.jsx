// src/components/Cadastro.js
import React, { useState } from 'react';
import axios from 'axios';
import * as C from '../styles/Cadastro.styled'; // Importando os estilos do Cadastro

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api-gestao-de-usuarios-com-flask.onrender.com/cadastro', { nome, email, senha });
      setSucesso(response.data.message);
      setError(''); // Limpa o erro, caso haja
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao cadastrar o usuário');
      setSucesso('');
    }
  };

  return (
    <C.CadastroContainer>
      <h2>Cadastrar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <C.Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <C.Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <C.Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
        {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
        <C.Button type="submit">Cadastrar</C.Button>
      </form>
    </C.CadastroContainer>
  );
};

export default Cadastro;
