import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SettingsPageContainer, 
  SettingsPageBodyContainer, 
  ButtonContainer, 
  ActionButton 
} from './SettingsPage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';
import NicknameChangeModal from '../../components/Modals/NickNameChangeModal/NickNameChangeModal.ui';
import PasswordChangeModal from '../../components/Modals/PasswordChangeModal/PasswordChangeModal.ui';
import AvatarChangeModal from '../../components/Modals/AvatarChangeModal/AvatarChangeModal.ui';

export default function SettingsPage() {
  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [avatar, setAvatar] = useState('/path/to/default/avatar.png'); // caminho do avatar padrão

  const navigate = useNavigate();

  const handleNicknameChange = () => {
    setIsNicknameModalOpen(true);
  };

  const handleCloseNicknameModal = () => {
    setIsNicknameModalOpen(false);
  };

  const handlePasswordChange = () => {
    setIsPasswordModalOpen(true);
  };

  const handleClosePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };

  const handleAvatarChange = () => {
    setIsAvatarModalOpen(true);
  };

  const handleCloseAvatarModal = () => {
    setIsAvatarModalOpen(false);
  };

  const handleSaveAvatar = (newAvatar) => {
    setAvatar(newAvatar);
  };

  return (
    <SettingsPageContainer>
      <NavHeader avatar={avatar} />
      <SettingsPageBodyContainer>
        <ButtonContainer>
          <ActionButton onClick={handleNicknameChange}>Alterar Apelido</ActionButton>
          <ActionButton onClick={handlePasswordChange}>Alterar Senha</ActionButton>
          <ActionButton onClick={handleAvatarChange}>Alterar Avatar</ActionButton>
        </ButtonContainer>
      </SettingsPageBodyContainer>
      <NicknameChangeModal isOpen={isNicknameModalOpen} onClose={handleCloseNicknameModal} />
      <PasswordChangeModal isOpen={isPasswordModalOpen} onClose={handleClosePasswordModal} />
      <AvatarChangeModal isOpen={isAvatarModalOpen} onClose={handleCloseAvatarModal} onSave={handleSaveAvatar} />
    </SettingsPageContainer>
  );
}
