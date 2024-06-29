import React, { useContext, useEffect, useState } from "react";
import { ApelidoTitle, ConfigBlock, ConfigImage, HeaderContainer, HomeHeader, LibraryImage, LogOffImage, LogoImage, RankingBox, SteamImage } from "./HeaderMenu.styles";
import { useNavigate } from 'react-router-dom';
import LibLogo from '../../assets/images/LibLogo.png';
import SteamLogo from '../../assets/images/SteamLogo.png';
import ConfigLogo from '../../assets/images/ConfigLogo.png';
import LogOut from '../../assets/images/LogOut.png';
import defaultAvatar from '../../assets/images/Avatar/LogoGH.png';
import AuthContext from "../../AuthContext";
import axios from 'axios';

const fetchUsersData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user/all');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados dos usuários', error);
    return [];
  }
};

const fetchLastAccess = async (nomeUsuario) => {
  try {
    const response = await axios.get(`http://localhost:8080/acesso/user/${nomeUsuario}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar último acesso do usuário', error);
    return [];
  }
};

const updateRank = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/user/${id}/atualizaRank`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error('Erro ao atualizar o ranking do usuário', error);
  }
};

export function NavHeader({avatar}) {
  const navigate = useNavigate();
  const { authData, setAuthData } = useContext(AuthContext);
  const [ranking, setRanking] = useState(0);
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);

  useEffect(() => {
    const getUsersData = async () => {
      const users = await fetchUsersData();
      const sortedUsers = users.sort((a, b) => b.rank - a.rank);
      const userRank = sortedUsers.findIndex(user => user.usuarioId === authData.idU) + 1;
      setRanking(userRank);
      if (authData.avatar) {
        setUserAvatar(authData.avatar);
      } else {
        setUserAvatar(defaultAvatar);
      }
    };
    getUsersData();
  }, [authData.idU, authData.avatar]);

  useEffect(() => {
    const checkAndUpdateRank = async () => {
      const lastAccesses = await fetchLastAccess(authData.nomeUsuario);
      if (lastAccesses.length > 0) {
        const lastAccess = new Date(Math.max(...lastAccesses.map(access => new Date(access.dataAcesso))));
        const now = new Date();
        const diffSeconds = Math.floor((now - lastAccess) / 1000);
        console.log("teste")
        if (diffSeconds > 30 && authData.rank >0) {
          const prego =await updateRank(authData.idU);
          setAuthData({ ...authData, rank: prego });
        }
      }
    };

    const interval = setInterval(checkAndUpdateRank, 30000); 

    return () => clearInterval(interval); 
  }, [authData.apelido, authData.idU]);

  return (
    <HomeHeader>
      <HeaderContainer>
        <LogoImage onClick={() => navigate('/homepage')}
          src={userAvatar} alt='Logo' />
        <ApelidoTitle>{authData.apelido}</ApelidoTitle>
      </HeaderContainer>
      <RankingBox>
        {`Ranking:  #${ranking}`}
      </RankingBox>
      <ConfigBlock>
        <LibraryImage onClick={() => navigate('/library')}
          src={LibLogo} alt='Library' />
        <SteamImage onClick={() => navigate('/SteamComand')}
          src={SteamLogo} alt='Steam' />
        <ConfigImage onClick={() => navigate('/settings')}
          src={ConfigLogo} alt='Config' />
        <LogOffImage onClick={() => navigate('/')}
          src={LogOut} alt='LogOut' />
      </ConfigBlock>
    </HomeHeader>
  );
}
