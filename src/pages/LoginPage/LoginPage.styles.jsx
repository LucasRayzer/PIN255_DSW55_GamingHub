import styled from 'styled-components'

export const LoginBody = styled.div.attrs({
  className:"Body",
})`
margin: 0;
display: flex;
flex-direction: column;
width:100%;
height:100vh;
`;

export const LoginContainer = styled.div.attrs({
    className:"login-container",
})`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:100%;
  background: url('src/assets/images/BackgroundImage1.png') no-repeat center center;
  background-size: cover;
  background-color:#000000c3;
`;
export const LogoContainer = styled.div.attrs({
  className:"logo-container",
})`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 50px
`;
export const LogoImage = styled.img.attrs({
    className:"logo-image",
})`
  display:flex;

`;

export const LoginHeader = styled.div.attrs({
    className:"Header",
})`
  width: 100%;
  padding: 10px 0;
  background-color: rgb(0, 0, 0);
  text-align: start;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const LoginForm = styled.div.attrs({
    className:"Form",
})`
  background-color: rgba(250, 250, 250, 0.603);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled.input.attrs({
    className:"Input",
})`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: 1px solid #0f0c0c96;
  border-radius: 5px;
`;

export const LoginButton = styled.button.attrs({
    className:"Button",
})`
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #000000;
  }
`;

export const LoginLink = styled.a.attrs({
    className:"Link",
})`
  margin-top: 10px;
  color: #000000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
