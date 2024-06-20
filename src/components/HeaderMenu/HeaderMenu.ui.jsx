import React, { useContext, useEffect, useState } from "react";
import { ApelidoTitle, ConfigBlock, ConfigImage, HeaderContainer, HomeHeader, LibraryImage, LofOffImage, LogoImage, RankingBox, SteamImage } from "./HeaderMenu.styles";
import { useNavigate } from 'react-router-dom';
import LibLogo from '../../assets/images/LibLogo.png';
import SteamLogo from '../../assets/images/SteamLogo.png';
import ConfigLogo from '../../assets/images/ConfigLogo.png';
import LogOut from '../../assets/images/LogOut.png';
import AuthContext from "../../AuthContext";

export function NavHeader({ avatar }) {
  const navigate = useNavigate();
  const { authData } = useContext(AuthContext);
  const [ranking, setRanking] = useState(0);

  // Função simulada para buscar dados do ranking
  useEffect(() => {
    const interval = setInterval(() => {
      // Simular chamada à API para obter dados do ranking
      setRanking(prevRanking => (prevRanking + 1) % 100); // Exemplo de lógica de incremento
    }, 60000); // Atualiza a cada 60 segundos

    return () => clearInterval(interval);
  }, []);

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
        <LofOffImage onClick={() => navigate('/')}
          src={LogOut} alt='LogOut' />
      </ConfigBlock>
    </HomeHeader>
  );
}
