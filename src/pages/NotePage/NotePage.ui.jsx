import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  NotePageContainer, 
  NotePageBodyContainer, 
  ColumnsContainer, 
  LeftColumn, 
  RightColumn,  
  SectionTitle, 
  NoteSection, 
  NoteOptions, 
  NoteButton, 
  ActionButton, 
  NoteResult,
  NoteResultItem,
  NoteResultLabel,
  NoteResultValue,
  LeftSection,
  RightSection,
} from './NotePage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';

const mockGameData = {
  name: "Counter Strike 2",
  userNote: 4,
  overallNote: 4.3
};

export default function NotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(mockGameData.userNote);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleSaveNote = () => {
    // Save the note to the backend or state management
    alert(`Nota ${selectedNote} salva com sucesso!`);
    navigate(-1); // Volta para a página anterior
  };

  return (
    <NotePageContainer>
      <NavHeader />
      <NotePageBodyContainer>
        <ColumnsContainer>
          <LeftColumn>
            <LeftSection>
              <SectionTitle>{mockGameData.name}</SectionTitle>
              <NoteSection>
                <SectionTitle>Atribuir Nota</SectionTitle>
                <NoteOptions>
                  {[1, 2, 3, 4, 5].map((note) => (
                    <NoteButton 
                      key={note} 
                      selected={selectedNote === note}
                      onClick={() => handleNoteClick(note)}
                    >
                      {note}
                    </NoteButton>
                  ))}
                </NoteOptions>
                <ActionButton onClick={handleSaveNote}>Salvar Nota</ActionButton>
              </NoteSection>
            </LeftSection>
          </LeftColumn>
          <RightColumn>
            <RightSection>
              <SectionTitle>Nota do Jogo</SectionTitle>
              <NoteResult>
                <NoteResultItem>
                  <NoteResultLabel>Sua nota</NoteResultLabel>
                  <NoteResultValue>{selectedNote}</NoteResultValue>
                </NoteResultItem>
                <NoteResultItem>
                  <NoteResultLabel>Nota Geral</NoteResultLabel>
                  <NoteResultValue>{mockGameData.overallNote}</NoteResultValue>
                </NoteResultItem>
              </NoteResult>
            </RightSection>
          </RightColumn>
        </ColumnsContainer>
      </NotePageBodyContainer>
    </NotePageContainer>
  );
}
