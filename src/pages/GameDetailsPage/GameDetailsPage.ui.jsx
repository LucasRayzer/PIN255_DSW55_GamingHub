import React from 'react';
import { useParams } from 'react-router-dom';
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
  const gameData = mockGameData; // Aqui você pode buscar os dados reais usando o id

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
                  <ActionButton>Adicionar aos Favoritos</ActionButton>
                  <ActionButton>Atribuir Nota</ActionButton>
                  <ActionButton>Resgatar Recompensa</ActionButton>
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
