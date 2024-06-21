import styled from 'styled-components';

export const SteamPageContainer = styled.div.attrs({
  className: "Steam-page-container",
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SteamBodyContainer = styled.div.attrs({
  className: "steam-body-container"
})`
  flex: 1;
  overflow-y: auto;
  background-color: #252525;
  padding: 20px;
`;
export const CenteredContainer = styled.div.attrs({
    className: "centered-container"
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  `;
  
  export const CodeInput = styled.input.attrs({
    className: 'code-input',
  })`
    background: #0000008b;
    padding: 20px;
    border-radius: 8px;
    color: white;
    width: 300px;
    text-align: center;
    border: 1px solid;
    border-color: #ffffffae;
    margin-bottom: 20px;
  `;
  
  export const SubmitButton = styled.button.attrs({
    className: 'submit-button',
  })`
    background-color: #0000008b;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;
