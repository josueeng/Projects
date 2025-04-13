import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate
import * as S from '../styles/Login.styled';
import BackCont from '../assets/Img/BackLog.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Inicializar o hook useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('https://api-gestao-de-usuarios-com-flask.onrender.com/login', {
                email,
                senha,
            });

            if (response.status === 200) {
                setSuccess('Login bem-sucedido!');
                localStorage.setItem('username', response.data.username); // Armazenar o nome do usuário
                navigate('/'); // Redirecionar para a página inicial
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError('Erro ao tentar fazer login.');
            }
        }
    };

    return (
        <S.LoginContainer>
            <S.BackLogin src={BackCont} alt="" />
            <S.Form onSubmit={handleLogin}>
                <S.Title>Login</S.Title>
                <S.FormGroup>
                    <S.ContForm>
                        <S.Input
                            placeholder='Email'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <S.FormGroup>
                            <S.Input
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Senha"
                                required
                            />
                        </S.FormGroup>
                    </S.ContForm>
                </S.FormGroup>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                {success && <S.SuccessMessage>{success}</S.SuccessMessage>}
                <S.Button type="submit">Entrar</S.Button>
            </S.Form>
        </S.LoginContainer>
    );
};

export default Login;