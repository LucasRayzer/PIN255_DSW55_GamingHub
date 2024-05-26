import styled from 'styled-components';

export const GameDetailsContainer = styled.div.attrs({
  className: "game-details-container",
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const GameDetailsBodyContainer = styled.div.attrs({
  className: "game-details-body-container"
})`
  flex: 1;
  overflow-y: auto;
  background-color: #252525;
  padding: 20px;
`;

export const ColumnsContainer = styled.div.attrs({
  className: "columns-container"
})`
  display: flex;
  gap: 20px;
`;

export const LeftColumn = styled.div.attrs({
  className: "left-column"
})`
  flex: 1;
  margin-top: 60px;
  border-radius: 8px;
`;

export const RightColumn = styled.div.attrs({
  className: "right-column"
})`
  margin-top: 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div.attrs({
  className: "section"
})`
  background-color: #00000053;
  padding: 20px;
  border-radius: 8px;
`;

export const GameImage = styled.img.attrs({
  className: "game-image"
})`
  width: 200px;
  height: 200px;
  border-radius:5px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2.attrs({
  className: "section-title"
})`
  margin: 0 0 10px 0;
  color: #fff;
`;

export const GameInfo = styled.div.attrs({
  className: "game-info"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const GameInfoDown = styled.div.attrs({
    className: "game-options"
  })`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
export const GameInfoUp = styled.div.attrs({
    className: "game-container-info"
  })`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

export const InfoText = styled.div.attrs({
  className: "info-text"
})`
  color: white;
`;

export const ActionsContainer = styled.div.attrs({
  className: "actions-container"
})`
  display: flex;
  flex-direction:column;
  gap: 10px;
  margin-top: 20px;
`;

export const ActionButton = styled.button.attrs({
  className: "action-button"
})`
  padding: 10px;
  background-color: #0000005e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #353535;
  }
`;

export const Description = styled.p.attrs({
  className: "description"
})`
  color: white;
  margin: 0;
`;

export const ReviewText = styled.div.attrs({
  className: "review-text"
})`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Review = styled.div.attrs({
  className: "review"
})`
  color: white;
  background-color: #0000005e;
  padding: 10px;
  border-radius: 4px;
`;
