import React, { useContext, useEffect, useState } from "react";
import { ApelidoTitle, ConfigBlock, ConfigImage, HeaderContainer, HomeHeader, LibraryImage, LogOffImage, LogoImage, RankingBox, SteamImage } from "./HeaderMenu.styles";
import { useNavigate } from 'react-router-dom';
import LibLogo from '../../assets/images/LibLogo.png';
import SteamLogo from '../../assets/images/SteamLogo.png';
import ConfigLogo from '../../assets/images/ConfigLogo.png';
import LogOut from '../../assets/images/LogOut.png';
import AuthContext from "../../AuthContext";
import axios from 'axios';

const fetchRankData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/user/${id}/ranking`);
    const rank = response.data;
    return {
      rank
    };
  } catch (error) {
    console.error('Erro ao buscar dados dos troféus', error);
    return {
      rank: 0
    };
  }
};

export function NavHeader({ avatar }) {
  const navigate = useNavigate();
  const { authData } = useContext(AuthContext);
  const [ranking, setRanking] = useState(0);

  useEffect(() => {
    const getRankData = async () => {
      const data = await fetchRankData(authData.idU);
      setRanking(data.rank);
    };
    
    getRankData();
  }, [authData.idU]);

  return (
    <HomeHeader>
      <HeaderContainer>
        <LogoImage onClick={() => navigate('/homepage')}
          src={authData.avatar} alt='Logo' />
        <ApelidoTitle>{authData.apelido}</ApelidoTitle>
      </HeaderContainer>
      <RankingBox>
        {` Ranking:  #${ranking}`}
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
