import React, { useState } from 'react';
import { ModalContainer, ModalContent, ModalInput, ModalButtonContainer, CancelButton, SaveButton, ModalTitle } from './PasswordChangeModal.styles';

export default function PasswordChangeModal({ isOpen, onClose }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    // Lógica para salvar a nova senha
    console.log('Nova senha:', password);
    onClose();
  };
  // Renderiza o modal somente se `isOpen` for true
  return (
    isOpen ? (
      <ModalContainer>
        <ModalContent>
          <ModalTitle >Alterar Senha</ModalTitle>
          <ModalInput 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Nova Senha"
          />
          <ModalInput 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirme a Nova Senha"
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
