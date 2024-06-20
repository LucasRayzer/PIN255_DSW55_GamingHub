import React, { useContext, useState } from 'react';
import { CancelButton, ModalButtonContainer, ModalContainer, ModalContent, ModalInput, ModalTitle, SaveButton } from './NickNameChangeModal.styles';
import AuthContext from '../../../AuthContext';
import axios from 'axios';


export default function NicknameChangeModal({ isOpen, onClose }) {
  const [nickname, setNickname] = useState('');
  const { authData, setAuthData } = useContext(AuthContext);

  async function setApelido(){
    try {
      const response = await axios.get(`http://localhost:8080/user/nome/${authData.nomeUsuario}/apelido/${nickname}`);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const handleSave = () => {
    setApelido();
    setAuthData({ ...authData, apelido: nickname});
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
