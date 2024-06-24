import React, { useContext, useEffect, useState } from 'react';
import { HomeBodyContainer, HomePageContainer, TablesContainer, TableRow, TableWrapper, TableTitle, ListItem, ItemImage, ItemText, ItemNumber, ItemImage2 } from './HomePage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';
import axios from 'axios';
import AuthContext from '../../AuthContext';


const fetchLibraryData = async (steamId) => {
  try {
    const response = await axios.get(`http://localhost:8080/user/steamId/${steamId}/jogos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    return [];
  }
};

const fetchPlayerCount = async (appId, steamId) => {
  try {
    const response = await axios.get(`http://localhost:8080/jogo/jogadoresAtual/${appId}/${steamId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar player count para o appId ${appId}`, error);
    return 0;
  }
};

const fetchGamesByPlaytime = async (steamId) => {
  try {
    const response = await axios.get(`http://localhost:8080/user/steamId/${steamId}/jogos`); 
    const games = response.data;
    const sortedGamesByPlaytime = games.sort((a, b) => b.tempoDeJogo - a.tempoDeJogo);
    return sortedGamesByPlaytime.map(game => ({
      ...game,
      tempoDeJogoHours: game.tempoDeJogo / 60 
    })).slice(0, 5);  
  } catch (error) {
    console.error('Erro ao buscar dados da API para tempo de jogo', error);
    return [];
  }
};

const fetchTopUsersByRank = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user/all');
    const users = response.data;
    const sortedUsersByRank = users.sort((a, b) => b.rank - a.rank);
    return sortedUsersByRank.slice(0, 5);
  } catch (error) {
    console.error('Erro ao buscar dados da API de usuários', error);
    return [];
  }
};
export default function HomePage() {
  const [topGames, setTopGames] = useState([]);
  const [topGamesByAchievements, setTopGamesByAchievements] = useState([]);
  const [topGamesByPlaytime, setTopGamesByPlaytime] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const { authData, setAuthData } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      const games = await fetchLibraryData(authData.steamId);
      const gamesWithPlayerCount = await Promise.all(games.map(async (game) => {
        const player_count = await fetchPlayerCount(game.appId, authData.steamId);
        return {
          ...game,
          player_count
        };
      }));
      const sortedGames = gamesWithPlayerCount.sort((a, b) => b.player_count - a.player_count);
      setTopGames(sortedGames.slice(0, 5));

      const sortedGamesByAchievements = games.sort((a, b) => b.f_conquistas - a.f_conquistas);
      setTopGamesByAchievements(sortedGamesByAchievements.slice(0, 5));

      const sortedGamesByPlaytime = await fetchGamesByPlaytime(authData.steamId);
      setTopGamesByPlaytime(sortedGamesByPlaytime);

      const topUsersByRank = await fetchTopUsersByRank();
      setTopUsers(topUsersByRank);
    };

    getData();
  }, []);

  return (
    <HomePageContainer>
      <NavHeader />
      <HomeBodyContainer>
        <TablesContainer>
          <TableRow>
            <TableWrapper>
              <TableTitle>Jogos Mais Jogados</TableTitle>
              {topGames.map((game, index) => (
                <ListItem key={index}>
                  <ItemImage src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appId}/capsule_184x69.jpg`} alt={`Item ${index + 1}`} />
                  <ItemText>{game.nome}</ItemText>
                  <ItemNumber>{game.player_count}</ItemNumber>
                </ListItem>
              ))}
            </TableWrapper>
            <TableWrapper>
              <TableTitle>Top 5 por Conquistas Desbloqueadas</TableTitle>
              {topGamesByAchievements.map((game, index) => (
                <ListItem key={index}>
                  <ItemImage src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appId}/capsule_184x69.jpg`} alt={`Item ${index + 1}`} />
                  <ItemText>{game.nome}</ItemText>
                  <ItemNumber>{game.f_conquistas}</ItemNumber>
                </ListItem>
              ))}
            </TableWrapper>
          </TableRow>
          <TableRow>
            <TableWrapper>
              <TableTitle>Top 5 por Tempo de Jogo</TableTitle>
              {topGamesByPlaytime.map((game, index) => (
                <ListItem key={index}>
                  <ItemImage src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appId}/capsule_184x69.jpg`} alt={`Item ${index + 1}`} />
                  <ItemText>{game.nome}</ItemText>
                  <ItemNumber>{game.tempoDeJogoHours.toFixed(2)}h</ItemNumber>
                </ListItem>
              ))}
            </TableWrapper>
            <TableWrapper>
              <TableTitle>Top 5 Usuários por Ranking</TableTitle>
              {topUsers.map((user, index) => (
                <ListItem key={index}>
                  <ItemImage2 src={user.imagem} alt={`Item ${index + 1}`} />
                  <ItemText>{user.apelido}</ItemText>
                  <ItemNumber>{user.rank}</ItemNumber>
                </ListItem>
              ))}
            </TableWrapper>
          </TableRow>
        </TablesContainer>
      </HomeBodyContainer>
    </HomePageContainer>
  );
}
