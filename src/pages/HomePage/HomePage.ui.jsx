import React, { useEffect, useState } from 'react';
import { HomeBodyContainer, HomePageContainer, TablesContainer, TableRow, TableWrapper, TableTitle, ListItem, ItemImage, ItemText, ItemNumber } from './HomePage.styles';
import {NavHeader} from '../../components/HeaderMenu/HeaderMenu.ui';
import axios from 'axios';

 // Função mock para buscar dados do banco de dados
const fetchData = async () => {
   // Substitua esta função pela lógica real de busca dos dados do banco
   return {
     list4: [
       { id: 1, text: "Item 4.1", image: "https://via.placeholder.com/40" },
       { id: 2, text: "Item 4.2", image: "https://via.placeholder.com/40" },
       { id: 3, text: "Item 4.3", image: "https://via.placeholder.com/40" },
       { id: 4, text: "Item 1.4", image: "https://via.placeholder.com/40" },
       { id: 5, text: "Item 1.5", image: "https://via.placeholder.com/40" }
     ]
   };
 };
 const fetchLibraryData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/user/steamId/76561198973296498/jogos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    return [];
  }
};

const fetchPlayerCount = async (appId) => {
  try {
    const response = await axios.get(`http://localhost:8080/jogo/jogadoresAtual/${appId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar player count para o appId ${appId}`, error);
    return 0;
  }
};

const fetchGamesByPlaytime = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/user/steamId/76561198973296498/jogos`);
    const games = response.data;
    // Ordena os jogos pelo tempoDeJogo em ordem decrescente
    const sortedGamesByPlaytime = games.sort((a, b) => b.tempoDeJogo - a.tempoDeJogo);
    return sortedGamesByPlaytime.map(game => ({
      ...game,
      tempoDeJogoHours: game.tempoDeJogo / 60  // converte tempoDeJogo de minutos para horas
    })).slice(0, 5);  // pega os top 5 jogos
  } catch (error) {
    console.error('Erro ao buscar dados da API para tempo de jogo', error);
    return [];
  }
};

export default function HomePage() {
  const [topGames, setTopGames] = useState([]);
  const [data, setData] = useState({ list4: [] });
  const [topGamesByAchievements, setTopGamesByAchievements] = useState([]);
  const [topGamesByPlaytime, setTopGamesByPlaytime] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const result = await fetchData();
        setData(result);
        const games = await fetchLibraryData();
        const gamesWithPlayerCount = await Promise.all(games.map(async (game) => {
          const player_count = await fetchPlayerCount(game.appId);
          return {
            ...game,
            player_count
          };
        }));
        const sortedGames = gamesWithPlayerCount.sort((a, b) => b.player_count - a.player_count);
        setTopGames(sortedGames.slice(0, 5));

        const sortedGamesByAchievements = games.sort((a, b) => b.f_conquistas - a.f_conquistas);
        setTopGamesByAchievements(sortedGamesByAchievements.slice(0, 5));

        const sortedGamesByPlaytime = await fetchGamesByPlaytime();
        setTopGamesByPlaytime(sortedGamesByPlaytime);
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
               <TableTitle>Tabela 4</TableTitle>
               {data.list4.map((item, index) => (
                 <ListItem key={index}>
                   <ItemImage src={item.image} alt={`Item ${index + 1}`} />
                   <ItemText>{item.text}</ItemText>
                   <ItemNumber>{item.id}</ItemNumber>
                 </ListItem>
               ))}
             </TableWrapper>
           </TableRow>
         </TablesContainer>
       </HomeBodyContainer>
     </HomePageContainer>
   );
 }