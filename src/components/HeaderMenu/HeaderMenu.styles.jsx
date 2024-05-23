import styled from 'styled-components';

export const HeaderContainer = styled.div.attrs({
    className: "home-logo-container",
  })`
    display: flex;
    flex-direction: row;
    align-items: start;
    padding-left: 40px;
    align-items: center;
    
  `;
  
  export const LogoImage = styled.img.attrs({
    className: "home-logo-image",
  })`
    display: flex;
    height:140px;
    position: relative;
    top:30px;
    cursor:pointer;
  `;
  export const HomeHeader = styled.div.attrs({
    className: "home-header",
  })`
  display:flex;
  background-color: #1A1A1A;
  text-align: start;
  border-bottom: 1px solid;
  border-color: #000000;
  max-height:100px;
  justify-content:space-between;
  `;
  export const ApelidoTitle = styled.h1.attrs({
    className: "nav-apelido-header",
  })`
    padding-left: 30px;
    color: white;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    align-items: center;
    justify-content:center;
  `;
  
   export const ConfigBlock = styled.div.attrs({
    className: "config-block-header",
  })`
   display:flex;
   align-items: center;
   
  `;
export const SteamImage = styled.img.attrs({
    className: "home-logo-image",
  })`
    display: flex;
    height:60px;
    margin-right: 40px;
    cursor: pointer;
  `;
  
  export const ConfigImage = styled.img.attrs({
    className: "home-logo-image",
  })`
    display: flex;
    height:60px;
    margin-right: 40px;
    cursor: pointer;
  `;
  export const LofOffImage = styled.img.attrs({
    className: "home-logoff-image",
  })`
    display: flex;
    height:60px;
    margin-right: 40px;
    cursor: pointer;
  `;
export const RankingBox = styled.div.attrs({
  className: "ranking-box",
})`
  display: flex;
  background-color: #000000a0;
  color: white;
  padding: 10px 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  margin: 30px;
`;

  