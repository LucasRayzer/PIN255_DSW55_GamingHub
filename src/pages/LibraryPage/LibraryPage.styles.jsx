import styled from 'styled-components';

export const LibraryPageContainer = styled.div.attrs({
  className: "library-page-container",
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const LibraryBodyContainer = styled.div.attrs({
  className: "library-body-container"
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
  margin-top: 70px;
  padding: 10px;
  border-radius: 8px;
`;

export const RightColumn = styled.div.attrs({
  className: "right-column"
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div.attrs({
  className: "section"
})`
  background-color: #00000053;
  padding: 10px;
  top: 50px;
  border-radius: 8px;
`;

export const TrophyContainer = styled.div.attrs({
    className: "trophy-container"
  })`
    display: flex;
    align-items: center;
  `;

export const TrophySection = styled(Section).attrs({
  className: "trophy-section"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
`;

export const SectionTitle = styled.h2.attrs({
  className: "section-title"
})`
  margin: 0 0 10px 0;
  color: #fff;
`;

export const List = styled.div.attrs({
  className: "list"
})`
  margin-top: 10px;
`;

export const ListItem = styled.div.attrs({
  className: "list-item"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  background-color: #0000005e;
  border-radius: 4px;
`;

export const ItemImage = styled.img.attrs({
  className: "item-image"
})`
  width: 40px;
  height: 40px;
  border-radius: 10%;
  margin-right: 10px;
`;

export const ItemText = styled.div.attrs({
  className: "item-text"
})`

  flex: 1;
  color: white;
`;

export const ItemNumber = styled.div.attrs({
  className: "item-number"
})`
  color: white;
`;

export const TrophyImage = styled.img.attrs({
  className: "trophy-image"
})`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const TrophyText = styled.div.attrs({
  className: "trophy-text"
})`
  color: white;
  font-size: 1.5em;
  margin-right: 20px;
  
`;

export const ConquestText = styled.p.attrs({
  className: "conquest-text"
})`
  margin: 5px 0;
  color: white;
  background-color: #0000005e;
  padding: 10px;
  border-radius: 4px;
`;
