import React from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleRegister = () => {
    // Adicione a lógica de registro aqui
    navigate('/dashboard'); // Supondo que '/dashboard' seja a rota após registro
  };

  return (
    <RegisterBody>
      <RegisterHeader>
        <RegisterTitle>Gaming Hub</RegisterTitle>
      </RegisterHeader>

      <RegisterContainer>
        <LogoContainer>
          <LogoImage src='src/assets/images/LogoGH.png' alt='Logo' />
        </LogoContainer>
        <RegisterForm>
          <h2>Cadastro</h2>
          <RegisterInput type="text" placeholder="Apelido" maxLength={25}/>
          <RegisterInput type="text" placeholder="Usuário" maxLength={25}/>
          <RegisterInput type="password" placeholder="Senha" maxLength={20}/>
          <RegisterButton onClick={handleRegister}>Cadastrar</RegisterButton>
          <RegisterLink onClick={() => navigate('/login')}>
            Já tem uma conta? Faça login
          </RegisterLink>
        </RegisterForm>
      </RegisterContainer>
    </RegisterBody>
  );
}