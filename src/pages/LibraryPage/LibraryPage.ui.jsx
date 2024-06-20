import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
import AuthContext from '../../AuthContext';

const fetchLibraryData = async (steamId) => {
  try {
    const response = await axios.get(`http://localhost:8080/user/steamId/76561198973296498/jogos`); //ta mockado pro meu perfil pq não quero ficar fazendo login o tempo todo na aplicacao
    const games = response.data.map(game => ({
      id: game.jogoId,
      name: game.nome,
      image: `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appId}/capsule_184x69.jpg`,
      achievements: `${game.f_conquistas}/${game.n_conquistas}`,
      completion: game.n_conquistas > 0 ? `${((game.f_conquistas / game.n_conquistas) * 100).toFixed(2)}%` : '0%',
      favorite: game.jogoFavorito,
      completos: game.f_conquistas,
      totais: game.n_conquistas,
    }));
    const favorites = games.filter(game => game.favorite);
    const totalAchievements = games.reduce((total, game) => total + game.totais, 0);
    console.log(totalAchievements);
    const acquiredAchievements = games.reduce((total, game) => total + game.completos, 0);

    return {
      games: games,
      trophies: favorites.length, // Contagem de jogos favoritos como trofeus (temporario)
      totalAchievements: totalAchievements,
      acquiredAchievements: acquiredAchievements,
      favorites: favorites,
      rank: 21, // Tá mockado
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    return {
      games: [],
      trophies: 0,
      totalAchievements: 0,
      acquiredAchievements: 0,
      favorites: [],
      rank: 0,
    };
  }
};

export default function LibraryPage() {
  const [data, setData] = useState({ games: [], trophies: 0, totalAchievements: 0, acquiredAchievements: 0, favorites: [], rank: 0 });
  const [trophies, setTrophies] = useState({ prata: 0, ouro: 0}); // vou usar pra pegar os troféus dps
  const [rank, setRank] = useState(0); // mesma coisa com o rank
  const navigate = useNavigate();
  const { authData, setAuthData } = useContext(AuthContext);
  useEffect(() => {
    const getData = async () => {
      const steamId= authData.steamId;
      const result = await fetchLibraryData(steamId);
      setData(result);
    };

    getData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/game/${id}`);
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
