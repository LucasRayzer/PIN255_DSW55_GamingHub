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
import axios from "axios";


export default function LoginPage() {
  const navigate = useNavigate();

  const [senhaConfirmed,setCon] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

    function getSenhaC(username) {
      const response = axios.get(`http://localhost:8080/user/nome/${username}`)
      .then(response=> {setCon(response.data.senha)})
      .catch(error=> console.log(error));
      console.log(response,senhaConfirmed,usuario,senha);
    }

    const handleLogin = () => {
    getSenhaC(usuario);
    if (senha ==  senhaConfirmed ) {
      navigate('/homepage');
    }else {
      console.log("Senha ou Usuário Inválida!");
    }
    
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
          <LoginInput type="text" placeholder="Usuário" maxLength={25} value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <LoginInput type="password" placeholder="Senha"  maxLength={20} value={senha} onChange={(e) => setSenha(e.target.value)}/>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
          <LoginLink onClick={() => navigate('/registro')}>
            Cadastre-se aqui
          </LoginLink>
        </LoginForm>
      </LoginContainer>
    </LoginBody>
  );
}