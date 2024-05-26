import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SettingsPageContainer, 
  SettingsPageBodyContainer, 
  ButtonContainer, 
  ActionButton 
} from './SettingsPage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';

export default function SettingsPage() {
  const navigate = useNavigate();

  const handleNicknameChange = () => {
    // Lógica para abrir o pop-up de alteração de apelido
  };

  const handlePasswordChange = () => {
    // Lógica para abrir o pop-up de alteração de senha
  };

  const handleAvatarChange = () => {
    // Lógica para abrir o pop-up de alteração de avatar
  };

  return (
    <SettingsPageContainer>
      <NavHeader />
      <SettingsPageBodyContainer>
        <ButtonContainer>
          <ActionButton onClick={handleNicknameChange}>Alterar Apelido</ActionButton>
          <ActionButton onClick={handlePasswordChange}>Alterar Senha</ActionButton>
          <ActionButton onClick={handleAvatarChange}>Alterar Avatar</ActionButton>
        </ButtonContainer>
      </SettingsPageBodyContainer>
    </SettingsPageContainer>
  );
}
