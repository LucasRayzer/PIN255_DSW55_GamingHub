import styled from 'styled-components';

export const ModalContainer = styled.div.attrs({
  className: 'modal-container',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.514);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div.attrs({
  className: 'modal-content',
})`
  background: #252525;
  padding: 20px;
  border-radius: 8px;
  color: white;
  width: 300px;
  text-align: center;
  border: 1px solid;
  border-color: #ffffffae;
  
`;

export const ModalInput = styled.input.attrs({
  className: 'modal-input',
})`
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #353535;
  width: 80%;
  color: black;
  
`;

export const ModalButtonContainer = styled.div.attrs({
  className: 'modal-button-container',
})`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SaveButton = styled.button.attrs({
  className: 'save-modal-button',
})`
  background-color: #0000008b;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


export const CancelButton = styled.button.attrs({
    className: 'cancel-modal-button',
  })`
    background-color: #0000008b;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;
  export const ModalTitle = styled.h2.attrs({
    className: "modal-title"
  })`
    margin: 0 0 10px 0;
    color: #fff;
  `;

