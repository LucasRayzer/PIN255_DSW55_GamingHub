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
  GameInfoUp,
  GameInfoDown,
  TableWrapperAchievement,
  ListAchievement,
  ActionButton,
  AchievementNumber,
  AchievementName,
  ImageAchievement
} from './GameDetailsPage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';

const fetchAchievements = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/jogo/${id}/conquistas`);
    const data = await response.json();
    return data.map(conquista => ({
      icon: conquista.imagem,
      nome: conquista.nomeConquista,
      conc: conquista.conquistaConcluida > 0 ? 'Concluida' : 'Incompleta'
    }));
  } catch (error) {
    console.error("Erro ao buscar as conquistas:", error);
    return [];
  }
};

export default function GameDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gameData, setGameData] = useState(null);
  const [achievements, setAchievements] = useState([]);

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
        });
      } catch (error) {
        console.error("Erro ao buscar os dados do jogo:", error);
      }
    };

    const fetchAndSetAchievements = async () => {
      const achievementsData = await fetchAchievements(id);
      setAchievements(achievementsData);
      console.log(achievementsData)
    };
    fetchGameData();
    fetchAndSetAchievements();
  }, [id]);

  const handleRateClick = () => {
    navigate(`/rate/${id}`);
  };

  const handleGetReward = () => {
    alert(`Recompensa Resgatada!`);
  };

  const handleAddFav = async () => {
    try {
      const response = await fetch(`http://localhost:8080/jogo/${gameData.name}/jogoFavorito`, {
        method: 'GET',
      });
      if (response.ok) {
        alert(`O jogo ${gameData.name} foi adicionado aos favoritos!`);
      } else {
        console.error('Erro ao adicionar o jogo aos favoritos.');
      }
    } catch (error) {
      console.error('Erro ao adicionar o jogo aos favoritos:', error);
    }
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
                </ActionsContainer>
              </GameInfoDown>
            </Section>
          </LeftColumn>
          <RightColumn>
            <Section>
              <SectionTitle>Conquistas do Usuário</SectionTitle>
              <TableWrapperAchievement>
                {achievements.length > 0 ? (
                  achievements.map((achievement, index) => (
                    <ListAchievement key={index}>
                      <ImageAchievement src={achievement.icon} alt={achievement.nome} />
                      <AchievementName>{achievement.nome}</AchievementName>
                      <AchievementNumber>{achievement.conc}</AchievementNumber>
                    </ListAchievement>
                  ))
                ) : (
                  <InfoText>Nenhuma conquista encontrada.</InfoText>
                )}
              </TableWrapperAchievement>
            </Section>
          </RightColumn>
        </ColumnsContainer>
      </GameDetailsBodyContainer>
    </GameDetailsContainer>
  );
}
