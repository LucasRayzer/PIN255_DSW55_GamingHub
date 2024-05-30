import styled from 'styled-components';

export const ModalContainer = styled.div.attrs({
  className: 'modal-container',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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

export const AvatarGrid = styled.div.attrs({
  className: 'avatar-grid',
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const AvatarOption = styled.img.attrs({
  className: 'avatar-option',
})`
  width: 60px;
  height: 60px;
  margin: 5px;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border-color: #ffffff;
  }
  &.selected {
    border-color: #00ff00;
  }
`;
