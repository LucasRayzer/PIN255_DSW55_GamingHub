import React, { useState, useEffect } from 'react';
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

export default function GameDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/jogo/${id}`);
        const data = await response.json();
        setGameData({
          name: data.nome,
          ranking: data.notaJogo || "N/A",
          image: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${data.appId}/capsule_184x69.jpg`, 
          hoursPlayed: `${(data.tempoDeJogo/60).toFixed(2)} horas`, 
          completion: `${((data.f_conquistas / data.n_conquistas) * 100).toFixed(2)}%`,
          description: "For over two decades, Counter-Strike has offered an elite competitive experience...", 
          recommendationPercentage: "87% Recomendado", 
          userReview: "É bom 👍" 
        });
      } catch (error) {
        console.error("Erro ao buscar os dados do jogo:", error);
      }
    };

    fetchGameData();
  }, [id]);

  const handleRateClick = () => {
    navigate(`/rate/${id}`);
  };

  const handleGetReward = () => {
    alert(`Recompensa Resgatada!`);
  };

  const handleAddFav = () => {
    const response = fetch(`http://localhost:8080/jogo/${gameData.name}/jogoFavorito`);
    console.log(response);
    alert(`O jogo ${gameData.name} foi adicionado aos favoritos!`);
  };

  if (!gameData) {
    return <div>Loading...</div>;
  }

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
                  <ActionButton onClick={handleAddFav}>Adicionar aos Favoritos</ActionButton>
                  <ActionButton onClick={handleRateClick}>Atribuir Nota</ActionButton>
                  <ActionButton onClick={handleGetReward}>Resgatar Recompensa</ActionButton>
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
