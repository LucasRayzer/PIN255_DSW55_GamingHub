import React, { useState } from 'react';
import { CancelButton, ModalButtonContainer, ModalContainer, ModalContent, ModalInput, ModalTitle, SaveButton } from './NickNameChangeModal.styles';


export default function NicknameChangeModal({ isOpen, onClose }) {
  const [nickname, setNickname] = useState('');

  const handleSave = () => {
    // Lógica para salvar o novo apelido
    console.log('Novo apelido:', nickname);
    onClose();
  };

  return (
    isOpen ? (
      <ModalContainer>
        <ModalContent>
        <ModalTitle >Alterar Apelido</ModalTitle>
          <ModalInput 
            type="text" 
            value={nickname} 
            onChange={(e) => setNickname(e.target.value)} 
            placeholder="Novo Apelido"
          />
          <ModalButtonContainer>
            <CancelButton onClick={onClose}>Voltar</CancelButton>
            <SaveButton onClick={handleSave}>Alterar</SaveButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
    ) : null // Caso contrário, não renderiza nada
  );
}
