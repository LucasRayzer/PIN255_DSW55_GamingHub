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
  TrophyContainer,
  SearchContainer,
  SearchInput,
  SearchButton
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
      totalAchievements: totalAchievements,
      acquiredAchievements: acquiredAchievements,
      favorites: favorites,
      rank: 21, // Tá mockado
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    return {
      games: [],
      totalAchievements: 0,
      acquiredAchievements: 0,
      favorites: [],
      rank: 0,
    };
  }
};

const fetchTrophyData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/trofeu/all');
    const trophies = response.data;

    const goldTrophies = trophies.filter(trophy => trophy.trofeuOuro).length;
    const silverTrophies = trophies.filter(trophy => trophy.trofeuPrata).length;

    return {
      ouro: goldTrophies,
      prata: silverTrophies
    };
  } catch (error) {
    console.error('Erro ao buscar dados dos troféus', error);
    return {
      ouro: 0,
      prata: 0
    };
  }
};

const fetchRankData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/user/${id}/ranking`);
    const rank = response.data;
    return {
      rank
    };
  } catch (error) {
    console.error('Erro ao buscar dados dos troféus', error);
    return {
      rank: 0
    };
  }
};

const searchGame = async (searchTerm) => {
  try {
    const response = await axios.get(`http://localhost:8080/jogo/nome/${searchTerm}`);
    return response.data.jogoId;
  } catch (error) {
    console.error('Erro ao buscar jogo', error);
    return null;
  }
};

export default function LibraryPage() {
  const [data, setData] = useState({ games: [], totalAchievements: 0, acquiredAchievements: 0, favorites: [], rank: 0 });
  const [trophies, setTrophies] = useState({ prata: 0, ouro: 0}); // vou usar pra pegar os troféus dps
  const [rank, setRank] = useState(0); // mesma coisa com o rank
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { authData, setAuthData } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      const steamId = authData.steamId;
      const result = await fetchLibraryData(steamId);
      setData(result);
      const trophyResult = await fetchTrophyData();
      setTrophies(trophyResult);
      const rankResult = await fetchRankData(authData.idU);
      setRank(rankResult);
    };

    getData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/game/${id}`);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      const result = await searchGame(searchTerm.trim());
      console.log(result)
      if(result!=null)
        navigate(`/game/${result}`);
    }
  };

  return (
    <LibraryPageContainer>
      <NavHeader />
      <LibraryBodyContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar jogo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
           <SearchButton onClick={handleSearch}>Buscar</SearchButton>
        </SearchContainer>
        <ColumnsContainer>
          <LeftColumn>
            <Section>
              <SectionTitle>Seus jogos {data.games.length}</SectionTitle>
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
            {searchResults.length > 0 && (
              <Section>
                <SectionTitle>Resultados da pesquisa</SectionTitle>
                <List>
                  {searchResults.map((game, index) => (
                    <ListItem key={index} onClick={() => handleItemClick(game.id)}>
                      <ItemImage src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appId}/capsule_184x69.jpg`} alt={`Search Result Game ${index + 1}`} />
                      <ItemText>{game.nome}</ItemText>
                      <ItemNumber>{game.f_conquistas}/{game.n_conquistas} ({game.n_conquistas > 0 ? `${((game.f_conquistas / game.n_conquistas) * 100).toFixed(2)}%` : '0%'})</ItemNumber>
                    </ListItem>
                  ))}
                </List>
              </Section>
            )}
          </LeftColumn>
          <RightColumn>
            <TrophySection>
              <SectionTitle>Trofeus/Prêmios</SectionTitle>
              <TrophyContainer>
                <TrophyImage src="src/assets/images/GoldTrophy.png" alt="Trophy" />
                <TrophyText>{trophies.ouro}</TrophyText>
                <TrophyImage src="src/assets/images/SilverTrophy.png" alt="Medal" />
                <TrophyText>{trophies.prata}</TrophyText>
              </TrophyContainer>
            </TrophySection>
            <Section>
              <SectionTitle>Conquistas</SectionTitle>
              <ConquestText>Rank: # {rank.rank}</ConquestText>
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
