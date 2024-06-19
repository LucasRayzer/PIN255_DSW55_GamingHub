import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
  LogoContainer,
  LogoImage,
  RegisterBody,
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterHeader,
  RegisterInput,
  RegisterLink,
  RegisterTitle
} from './RegisterPage.styles';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [apelido, setApelido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/user/create', {
        apelido: apelido,
        nomeUsuario: usuario,
        senha: senha
      });
      if (response.status === 201) {
        navigate('/login'); // Supondo que '/homepage' seja a rota após registro
      }
    } catch (error) {
      console.error("Erro na criação de Usuário!", error);
    }
  }

  return (
    <RegisterBody>
      <RegisterHeader>
        <RegisterTitle>Gaming Hub</RegisterTitle>
      </RegisterHeader>

      <RegisterContainer>
        <LogoContainer>
          <LogoImage src='src/assets/images/Avatar/LogoGH.png' alt='Logo' />
        </LogoContainer>
        <RegisterForm>
          <h2>Cadastro</h2>
          <RegisterInput type="text" placeholder="Apelido" maxLength={25} value={apelido} onChange={(e) => setApelido(e.target.value)}
            />
          <RegisterInput type="text" placeholder="Usuário" maxLength={25} value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <RegisterInput type="password" placeholder="Senha" maxLength={20} value={senha} onChange={(e) => setSenha(e.target.value)}/>
          <RegisterButton onClick={handleRegister}>Cadastrar</RegisterButton>
          <RegisterLink onClick={() => navigate('/login')}>
            Já tem uma conta? Faça login
          </RegisterLink>
        </RegisterForm>
      </RegisterContainer>
    </RegisterBody>
  );
}