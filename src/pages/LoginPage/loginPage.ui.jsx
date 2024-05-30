import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginBody,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginLink,
  LoginTitle,
  LogoContainer,
  LogoImage
} from './LoginPage.styles';



export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Adicione a lógica de login aqui
    navigate('/homepage'); // Supondo que '/dashboard' seja a rota após login
  };

  return (
    <LoginBody>
      <LoginHeader>
        <LoginTitle>Gaming Hub</LoginTitle>
      </LoginHeader>

      <LoginContainer>
        <LogoContainer>
          <LogoImage src='src/assets/images/Avatar/LogoGH.png' alt='Logo' />
        </LogoContainer>
        <LoginForm>
          <h2>Login</h2>
          <LoginInput type="text" placeholder="Usuário" maxLength={25}/>
          <LoginInput type="password" placeholder="Senha" maxLength={20}/>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
          <LoginLink onClick={() => navigate('/registro')}>
            Cadastre-se aqui
          </LoginLink>
        </LoginForm>
      </LoginContainer>
    </LoginBody>
  );
}