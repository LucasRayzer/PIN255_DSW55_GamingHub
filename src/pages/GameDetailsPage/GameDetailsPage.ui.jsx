import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  GameDetailsContainer, 
  GameDetailsBodyContainer, 
  ColumnsContainer, 
  LeftColumn, 
  RightColumn, 
  Section, 
  GameImage, 
  SectionTitle, 
  GameInfo, 
  InfoText, 
  ActionsContainer, 
  ActionButton, 
  Description, 
  Review, 
  ReviewText, 
  GameInfoUp,
  GameInfoDown
} from './GameDetailsPage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';

const mockGameData = {
  name: "Counter Strike 2",
  ranking: 3,
  image: "https://via.placeholder.com/100x150",
  hoursPlayed: "2,345",
  completion: "94%",
  description: "For over two decades, Counter-Strike has offered an elite competitive experience...",
  recommendationPercentage: "87% Recomendado",
  userReview: "É bom 👍"
};

export default function GameDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const gameData = mockGameData; // Aqui você pode buscar os dados reais usando o id

  const handleRateClick = () => {
    navigate(`/rate/${id}`);
  };
  //aqui tá com erro mesmo, é pq n tem lógica, ai ele reclama, deveria em addFav adicionar a lista de favoritos, e getReward, adicionar
  // um dos tiipos de troféus na lista de troféu do user, ou os dois se já fez 2x todas as conquistas
  const handleGetReward = () => {
    // Save the note to the backend or state management
    //aqui temos que adicionar as condicões se foi pegado recompensa sem ter concluido tudo, 
    //o alerta tem q ser de não concluido, se pegado 2x todas as achivments, deve ser pegado o troféu de ouro, se não só o de prata
    alert(`Recompensa Resgatada!`);
     
  };
  const handleAddFav = () => {
    // Save the note to the backend or state management
    //aqui temos que adicionar as condicões se foi pegado recompensa sem ter concluido tudo, 
    //o alerta tem q ser de não concluido, se pegado 2x todas as achivments, deve ser pegado o troféu de ouro, se não só o de prata
    alert(`O jogo ${gameData.name} foi adicionado aos favoritos!`);
     
  };

  return (
    <GameDetailsContainer>
      <NavHeader />
      <GameDetailsBodyContainer>
        <ColumnsContainer>
          <LeftColumn>
            <Section>
              <GameInfoUp>
                <GameImage src={gameData.image} alt={`${gameData.name} cover`} />
                <GameInfo>
                  <SectionTitle>{gameData.name}</SectionTitle>
                  <InfoText>Conquistas: {gameData.completion}</InfoText>
                  <InfoText>Horas jogadas: {gameData.hoursPlayed}</InfoText>
                </GameInfo>
              </GameInfoUp>
              <GameInfoDown>
                <ActionsContainer>
                  <ActionButton onCLick={handleAddFav}>Adicionar aos Favoritos</ActionButton>
                  <ActionButton onClick={handleRateClick}>Atribuir Nota</ActionButton>
                  <ActionButton onCLick={handleGetReward}>Resgatar Recompensa</ActionButton>
                </ActionsContainer>
              </GameInfoDown>
            </Section>
          </LeftColumn>
          <RightColumn>
            <Section>
              <SectionTitle>Descrição</SectionTitle>
              <Description>{gameData.description}</Description>
            </Section>
            <Section>
              <SectionTitle>Revisão do Usuário</SectionTitle>
              <ReviewText>{gameData.recommendationPercentage}</ReviewText>
              <Review>{gameData.userReview}</Review>
            </Section>
          </RightColumn>
        </ColumnsContainer>
      </GameDetailsBodyContainer>
    </GameDetailsContainer>
  );
}
