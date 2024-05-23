import React, { useEffect, useState } from "react";
import { ApelidoTitle, ConfigBlock, ConfigImage, HeaderContainer, HomeHeader, LofOffImage, LogoImage, RankingBox, SteamImage } from "./HeaderMenu.styles";
import { useNavigate } from 'react-router-dom';
export function NavHeader() {
        const navigate = useNavigate();
    
        
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
            
            <LogoImage  onClick={() => navigate('/homepage')}
            src='src/assets/images/LogoGH.png' alt='Logo' />
            <ApelidoTitle>Apelido do Usuário</ApelidoTitle>
     
        </HeaderContainer>
            <RankingBox>
                {` Ranking:  #${ranking}`}
            </RankingBox>
            <ConfigBlock>
                <SteamImage  onClick={() => navigate('/steamComand')}
                src='src/assets/images/SteamLogo.png' alt='Steam'/>
                <ConfigImage onClick={() => navigate('/config')}
                src='src/assets/images/ConfigLogo.png' alt='Steam'/>
                <LofOffImage onClick={() => navigate('/')}
                src='src/assets/images/LogOut.png' alt='LogOut'/>
            </ConfigBlock>
        </HomeHeader>
    );
}