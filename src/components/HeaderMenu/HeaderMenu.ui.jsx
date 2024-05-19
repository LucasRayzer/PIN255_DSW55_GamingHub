import React from "react";
import { ApelidoTitle, ConfigBlock, ConfigImage, HeaderContainer, HomeHeader, LofOffImage, LogoImage, SteamImage } from "./HeaderMenu.styles";
import { useNavigate } from 'react-router-dom';
export function NavHeader() {
    const navigate = useNavigate();

    return (
        <HomeHeader>
        
        <HeaderContainer>
            
            <LogoImage  onClick={() => navigate('/homepage')}
            src='src/assets/images/LogoGH.png' alt='Logo' />
            <ApelidoTitle>Apelido do Usuário</ApelidoTitle>
     
        </HeaderContainer>
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