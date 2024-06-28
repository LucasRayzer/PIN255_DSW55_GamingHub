import React, { useContext, useState } from 'react';
import { ModalContainer, ModalContent, ModalInput, ModalButtonContainer, CancelButton, SaveButton, ModalTitle } from './PasswordChangeModal.styles';
import AuthContext from '../../../AuthContext';
import axios from 'axios';

export default function PasswordChangeModal({ isOpen, onClose }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { authData, setAuthData } = useContext(AuthContext);


  async function setSenha(){
    try {
      const response = await axios.get(`http://localhost:8080/user/nome/${authData.nomeUsuario}/senha/${password}`);
      console.log(response.data)
      setAuthData({...authData, senha: password})
    } catch (error) {
      console.log(error);
    }
  }
  const handleSave = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    setSenha();
    //console.log('Nova senha:', password);
    alert('Senha trocada com sucesso!')
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
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
            <SaveButton onClick={handleSave}>Alterar</SaveButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
    ) : null // Caso contrário, não renderiza nada
  );
}
