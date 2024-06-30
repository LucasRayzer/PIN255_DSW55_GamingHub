import React, { useState, useEffect } from 'react';
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

export default function NotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState(null);
  const [selectedNote, setSelectedNote] = useState(0);
  const [averageNote, setAverageNote] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/jogo/${id}`);
        const data = await response.json();
        setGameData(data);
        setSelectedNote(data.notaJogo || 0);

        const responseAllGames = await fetch(`http://localhost:8080/jogo/nome/${data.nome}`);
        const allGamesData = await responseAllGames.json();

        // Calcular a média das notas
        const notes = allGamesData.map(game => game.notaJogo).filter(note => note !== null);
        const average = notes.length > 0 ? (notes.reduce((a, b) => a + b, 0) / notes.length) : 'N/A';
        setAverageNote(average.toFixed(1));
      } catch (error) {
        //console.error("Erro ao buscar dados do jogo:", error);
      }
    };

    fetchGameData();
  }, [id]);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleSaveNote = async () => {
    try {
      const response = await fetch(`http://localhost:8080/jogo/${id}/notaJogo/${selectedNote}`);
      if (response.ok) {
        alert(`Nota ${selectedNote} salva com sucesso!`);
        navigate(-1); 
      } else {
        console.error("Erro ao salvar a nota:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao salvar a nota:", error);
    }
  };

  if (!gameData) {
    return <div>Carregando...</div>;
  }

  return (
    <NotePageContainer>
      <NavHeader />
      <NotePageBodyContainer>
        <ColumnsContainer>
          <LeftColumn>
            <LeftSection>
              <SectionTitle>{gameData.nome}</SectionTitle>
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
                  <NoteResultLabel>Nota Média</NoteResultLabel>
                  <NoteResultValue>{averageNote}</NoteResultValue>
                </NoteResultItem>
              </NoteResult>
            </RightSection>
          </RightColumn>
        </ColumnsContainer>
      </NotePageBodyContainer>
    </NotePageContainer>
  );
}
