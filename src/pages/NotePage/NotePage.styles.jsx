import styled from 'styled-components';

export const NotePageContainer = styled.div.attrs({
  className: "note-page-container",
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NotePageBodyContainer = styled.div.attrs({
  className: "note-page-body-container"
})`
  flex: 1;
  overflow-y: auto;
  background-color: #252525;
  padding: 20px;
  align-items:center;
`;

export const ColumnsContainer = styled.div.attrs({
  className: "columns-container"
})`
  display: flex;
  justify-content:space-around;
  padding:20px;
`;

export const LeftColumn = styled.div.attrs({
  className: "left-column"
})`
  display:flex;
  margin-top: 60px;
  align-items:center;
  border-radius: 8px;
`;

export const RightColumn = styled.div.attrs({
  className: "right-column"
})`
  margin-top: 60px;
  align-items:center;
  display:flex;
  flex-direction: column;
  gap: 20px;
`;

export const LeftSection = styled.div.attrs({
  className: "left-section"
})`
  background-color: #00000053;
  padding: 20px;
  height:180px;
  width:400px;
  border-radius: 8px;
`;
export const RightSection = styled.div.attrs({
    className: "right-section"
  })`
    background-color: #00000053;
    padding: 20px;
    height:120px;
    width:400px;
    border-radius: 8px;
  `;
export const SectionTitle = styled.h2.attrs({
  className: "section-title"
})`
  margin: 0 0 10px 0;
  color: #fff;
  font-size: 18px;
`;

export const NoteSection = styled.div.attrs({
  className: "note-section"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const NoteOptions = styled.div.attrs({
  className: "note-options"
})`
  justify-content:space-between;
  display: flex;
  gap: 10px;
`;

export const NoteButton = styled.button.attrs((props) => ({
  className: "note-button",
  selected: props.selected,
}))`
  padding: 10px;
  background-color: ${(props) => (props.selected ? "#4CAF50" : "#0000005e")};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.selected ? "#4CAF50" : "#353535")};
  }
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
  width: 100%;
  
  &:hover {
    background-color: #353535;
  }
`;

export const NoteResult = styled.div.attrs({
  className: "note-result"
})`
  display: flex;
  flex-direction:column;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background-color: #0000005e;
  padding: 20px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
`;

export const NoteResultItem = styled.div.attrs({
  className: "note-result-item"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoteResultLabel = styled.div.attrs({
  className: "note-result-label"
})`
  color: white;
  font-weight: bold;
`;

export const NoteResultValue = styled.div.attrs({
  className: "note-result-value"
})`
  color: white;
`;
