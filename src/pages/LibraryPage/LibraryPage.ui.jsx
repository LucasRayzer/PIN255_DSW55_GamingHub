import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { 
  LibraryPageContainer, 
  LibraryBodyContainer, 
  ColumnsContainer, 
  LeftColumn, 
  RightColumn, 
  Section, 
  SectionTitle, 
  List, 
  ListItem, 
  ItemImage, 
  ItemText, 
  ItemNumber, 
  TrophySection, 
  TrophyImage, 
  TrophyText, 
  ConquestText,
  TrophyContainer
} from './LibraryPage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';


// Função mock para buscar dados do banco de dados
const fetchLibraryData = async () => {
  return {
    games: [
      { id: 1, name: "Counter Strike 2", image: "https://via.placeholder.com/40", achievements: "15/16", completion: "94%" },
      { id: 2, name: "Counter Strike 2", image: "https://via.placeholder.com/40", achievements: "15/16", completion: "94%" },
      // Adicione mais jogos conforme necessário
    ],
    trophies: 4,
    totalAchievements: 144,
    favorites: [
      { id: 1, name: "Counter Strike 2", image: "https://via.placeholder.com/40", achievements: "15/16", completion: "94%" }
      // Adicione mais jogos favoritos conforme necessário
    ],
    rank: 21,
    acquiredAchievements: 135,
  };
};

export default function LibraryPage() {
  const [data, setData] = useState({ games: [], trophies: 0, totalAchievements: 0, favorites: [], rank: 0, acquiredAchievements: 0 });
  const navigate = useNavigate(); // Utilize o hook useNavigate

  useEffect(() => {
    const getData = async () => {
      const result = await fetchLibraryData();
      setData(result);
    };

    getData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/game/${id}`); // Navegue para a página do jogo com o id do jogo
  };

  return (
    <LibraryPageContainer>
      <NavHeader />
      <LibraryBodyContainer>
        <ColumnsContainer>
          <LeftColumn>
            <Section>
              <SectionTitle>Seus jogos</SectionTitle>
              <List>
                {data.games.map((game, index) => (
                  <ListItem key={index} onClick={() => handleItemClick(game.id)}>
                    <ItemImage src={game.image} alt={`Game ${index + 1}`} />
                    <ItemText>{game.name}</ItemText>
                    <ItemNumber>{game.achievements} ({game.completion})</ItemNumber>
                  </ListItem>
                ))}
              </List>
            </Section>
          </LeftColumn>
          <RightColumn>
            <TrophySection>
              <SectionTitle>Trofeus/Prêmios</SectionTitle>
              <TrophyContainer>
                <TrophyImage src="src/assets/images/GoldTrophy.png" alt="Trophy" />
                <TrophyText>{data.trophies}</TrophyText>
                <TrophyImage src="src/assets/images/SilverTrophy.png" alt="Medal" />
                <TrophyText>{data.totalAchievements}</TrophyText>
              </TrophyContainer>
            </TrophySection>
            <Section>
              <SectionTitle>Conquistas</SectionTitle>
              <ConquestText>Rank: #{data.rank}</ConquestText>
              <ConquestText>Adquiridas: {data.acquiredAchievements}</ConquestText>
              <ConquestText>Total: {data.totalAchievements}</ConquestText>
            </Section>
            <Section>
              <SectionTitle>Jogos favoritos</SectionTitle>
              <List>
                {data.favorites.map((game, index) => (
                  <ListItem key={index} onClick={() => handleItemClick(game.id)}>
                    <ItemImage src={game.image} alt={`Favorite Game ${index + 1}`} />
                    <ItemText>{game.name}</ItemText>
                    <ItemNumber>{game.achievements} ({game.completion})</ItemNumber>
                  </ListItem>
                ))}
              </List>
            </Section>
          </RightColumn>
        </ColumnsContainer>
      </LibraryBodyContainer>
    </LibraryPageContainer>
  );
}
