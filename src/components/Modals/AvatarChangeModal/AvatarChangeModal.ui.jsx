import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalButtonContainer,
  CancelButton,
  SaveButton,
  ModalTitle,
  AvatarGrid,
  AvatarOption
} from './AvatarChangeModal.styles';
import avatar1 from '../../../assets/images/Avatar/LogoGH.png';
import avatar2 from '../../../assets/images/Avatar/LogoGH2.png';
import avatar3 from '../../../assets/images/Avatar/LogoGH3.png';
import avatar4 from '../../../assets/images/Avatar/LogoGH4.png';
import avatar5 from '../../../assets/images/Avatar/LogoGH5.png';
import avatar6 from '../../../assets/images/Avatar/LogoGH6.png';
import avatar7 from '../../../assets/images/Avatar/LogoGH7.png';
import avatar8 from '../../../assets/images/Avatar/LogoGH8.png';
import avatar9 from '../../../assets/images/Avatar/LogoGH9.png';

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9
];

export default function AvatarChangeModal({ isOpen, onClose, onSave }) {
  const [selectedAvatar, setSelectedAvatar] = useState('');

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleSave = () => {
    if (selectedAvatar) {
      onSave(selectedAvatar);
      onClose();
    } else {
      alert('Por favor, selecione um avatar');
    }
  };

  return (
    isOpen ? (
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Alterar Avatar</ModalTitle>
          <AvatarGrid>
            {avatars.map((avatar, index) => (
              <AvatarOption
                key={index}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className={selectedAvatar === avatar ? 'selected' : ''}
                onClick={() => handleAvatarClick(avatar)}
              />
            ))}
          </AvatarGrid>
          <ModalButtonContainer>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
            <SaveButton onClick={handleSave}>Alterar</SaveButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
    ) : null
  );
}
