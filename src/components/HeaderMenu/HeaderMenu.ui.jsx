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

export function NavHeader({avatar}) {
  const navigate = useNavigate();
  const { authData } = useContext(AuthContext);
  const [ranking, setRanking] = useState(0);
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);

  useEffect(() => {
    const getUsersData = async () => {
      const users = await fetchUsersData();
      const sortedUsers = users.sort((a, b) => b.rank - a.rank);
      const userRank = sortedUsers.findIndex(user => user.usuarioId === authData.idU) + 1;
      setRanking(userRank);
      // const user = users.find(user => user.usuarioId === authData.idU);
      // if (user && user.imagem) {
      //   setUserAvatar(user.imagem);
      // } else {
      //   setUserAvatar(defaultAvatar);
      // }
      if (authData.avatar) {
        setUserAvatar(authData.avatar);
      } else {
        setUserAvatar(defaultAvatar);
      }
    };
    getUsersData();
  }, [authData.idU], [authData.avatar]);

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
