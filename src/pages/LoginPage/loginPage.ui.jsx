import React, { useContext, useState } from 'react';
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
import AuthContext from '../../AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { authData, setAuthData } = useContext(AuthContext);
  const [senhaConfirmed, setCon] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  async function getSenhaC(username) {
    try {
      const response = await axios.get(`http://localhost:8080/user/nome/${username}`);
      setAuthData({
        apelido: response.data.apelido, 
        nomeUsuario: response.data.nomeUsuario, 
        senha: response.data.senha, 
        steamId: response.data.steamId
      });
      console.log(response.data.senha)
      setCon(response.data.senha);
      return response.data.senha;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const handleLogin = async () => {
    const confirmedSenha = await getSenhaC(usuario);
    console.log(senha, confirmedSenha)
    if (senha === confirmedSenha) {
      navigate('/homepage');
    } else {
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
          <LoginInput type="text" placeholder="Usuário" maxLength={25} value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          <LoginInput type="password" placeholder="Senha" maxLength={20} value={senha} onChange={(e) => setSenha(e.target.value)} />
          <LoginButton onClick={handleLogin}>Login</LoginButton>
          <LoginLink onClick={() => navigate('/registro')}>
            Cadastre-se aqui
          </LoginLink>
        </LoginForm>
      </LoginContainer>
    </LoginBody>
  );
}
