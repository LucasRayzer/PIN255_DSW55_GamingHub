import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBody, LoginButton, LoginContainer, LoginForm, LoginHeader, LoginInput, LoginLink, LogoContainer, LogoImage } from './LoginPage.styles';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // Adicione a lógica de login aqui
      navigate('/dashboard'); // Supondo que '/dashboard' seja a rota após login
    };
  
    return (
      <LoginBody>
        <LoginHeader>Gaming Hub</LoginHeader>
        
      <LoginContainer>
      <LogoContainer >
        <LogoImage src='src\assets\images\LogoGH.png'></LogoImage>
      </LogoContainer>
        <LoginForm>
          <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
          <LoginInput type="text" placeholder="Usuário" />
          <LoginInput type="password" placeholder="Senha" />
          <LoginButton onClick={handleLogin}>{isLogin ? 'Login' : 'Cadastrar'}</LoginButton>
          <LoginLink onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Cadastre-se aqui' : 'Já tem uma conta? Faça login'}
          </LoginLink>
        </LoginForm>
      </LoginContainer>
      </LoginBody>
    );
  };
  
  export default LoginPage;