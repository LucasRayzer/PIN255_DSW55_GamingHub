import styled from 'styled-components';

export const SettingsPageContainer = styled.div.attrs({
  className: 'settings-page-container',
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SettingsPageBodyContainer = styled.div.attrs({
  className: 'settings-page-body-container',
})`
  height:100vh;
  overflow-y: auto;
  background-color: #252525;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div.attrs({
  className: 'button-container',
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ActionButton = styled.button.attrs({
  className: 'action-button',
})`
  padding: 20px;
  background-color: #0000005e;
  color: white;
  border: none;
  font-size:16px;
  border-radius: 4px;
  cursor: pointer;
  width: 300px;
  
  &:hover {
    background-color: #353535;
  }
`;
