import styled from 'styled-components';

export const LoginBody = styled.div.attrs({
  className: "login-body",
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border: 1px solid;
  border-color: #000000;
`;

export const LoginContainer = styled.div.attrs({
  className: "login-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  background: url('src/assets/images/BackgroundImage1.png') no-repeat center center;
  background-size: cover;
  background-color: #1A1A1A;
`;

export const LogoContainer = styled.div.attrs({
  className: "login-logo-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const LogoImage = styled.img.attrs({
  className: "login-logo-image",
})`
  display: flex;
`;

export const LoginHeader = styled.div.attrs({
  className: "login-header",
})`
  padding: 10px 0;
  background-color: #1A1A1A;
  text-align: start;
  border-bottom: 1px solid;
  border-color: #000000;
`;

export const LoginTitle = styled.h1.attrs({
  className: "login-title-header",
})`
  padding-left: 40px;
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const LoginForm = styled.div.attrs({
  className: "login-form",
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
  className: "login-input",
})`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: 1px solid #0f0c0c96;
  border-radius: 5px;
`;

export const LoginButton = styled.button.attrs({
  className: "login-button",
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
  className: "login-link",
})`
  margin-top: 10px;
  color: #000000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
