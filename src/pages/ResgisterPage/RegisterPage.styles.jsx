import styled from 'styled-components';

export const RegisterBody = styled.div.attrs({
  className: "register-body",
})`
  margin: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  border: 1px solid;
  border-color: #000000;
`;

export const RegisterContainer = styled.div.attrs({
  className: "register-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: url('src/assets/images/BackgroundImage1.png') no-repeat center center;
  background-size: cover;
  background-color: #1A1A1A;
`;

export const RegisterHeader = styled.div.attrs({
  className: "register-header",
})`
  padding: 10px 0;
  background-color: #1A1A1A;
  text-align: start;
  border-bottom: 1px solid;
  border-color: #000000;
`;

export const RegisterTitle = styled.h1.attrs({
  className: "register-title-header",
})`
  padding-left: 40px;
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const RegisterForm = styled.div.attrs({
  className: "register-form",
})`
  background-color: rgba(250, 250, 250, 0.603);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterInput = styled.input.attrs({
  className: "register-input",
})`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: 1px solid #0f0c0c96;
  border-radius: 5px;
`;

export const RegisterButton = styled.button.attrs({
  className: "register-button",
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

export const RegisterLink = styled.a.attrs({
  className: "register-link",
})`
  margin-top: 10px;
  color: #000000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const LogoContainer = styled.div.attrs({
    className: "register-logo-container",
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  `;
  
  export const LogoImage = styled.img.attrs({
    className: "register-logo-image",
  })`
    display: flex;
  `;