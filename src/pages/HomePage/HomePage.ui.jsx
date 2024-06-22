import React, { useEffect, useState } from 'react';
import { HomeBodyContainer, HomePageContainer, TablesContainer, TableRow, TableWrapper, TableTitle, ListItem, ItemImage, ItemText, ItemNumber } from './HomePage.styles';
import {NavHeader} from '../../components/HeaderMenu/HeaderMenu.ui';

 // Função mock para buscar dados do banco de dados
const fetchData = async () => {
   // Substitua esta função pela lógica real de busca dos dados do banco
   return {
     list1: [
       { id: 1, text: "Item 1.1", image: "https://via.placeholder.com/40" },
       { id: 2, text: "Item 1.2", image: "https://via.placeholder.com/40" },
       { id: 3, text: "Item 1.3", image: "https://via.placeholder.com/40" },
       { id: 4, text: "Item 1.4", image: "https://via.placeholder.com/40" },
       { id: 5, text: "Item 1.5", image: "https://via.placeholder.com/40" }
     ],
     list2: [
       { id: 1, text: "Item 2.1", image: "https://via.placeholder.com/40" },
       { id: 2, text: "Item 2.2", image: "https://via.placeholder.com/40" },
       { id: 3, text: "Item 2.3", image: "https://via.placeholder.com/40" },
       { id: 4, text: "Item 1.4", image: "https://via.placeholder.com/40" },
       { id: 5, text: "Item 1.5", image: "https://via.placeholder.com/40" }
     ],
     list3: [
       { id: 1, text: "Item 3.1", image: "https://via.placeholder.com/40" },
       { id: 2, text: "Item 3.2", image: "https://via.placeholder.com/40" },
       { id: 3, text: "Item 3.3", image: "https://via.placeholder.com/40" },
       { id: 4, text: "Item 1.4", image: "https://via.placeholder.com/40" },
       { id: 5, text: "Item 1.5", image: "https://via.placeholder.com/40" }
     ],
     list4: [
       { id: 1, text: "Item 4.1", image: "https://via.placeholder.com/40" },
       { id: 2, text: "Item 4.2", image: "https://via.placeholder.com/40" },
       { id: 3, text: "Item 4.3", image: "https://via.placeholder.com/40" },
       { id: 4, text: "Item 1.4", image: "https://via.placeholder.com/40" },
       { id: 5, text: "Item 1.5", image: "https://via.placeholder.com/40" }
     ]
   };
 };
 
 export default function HomePage() {
   const [data, setData] = useState({ list1: [], list2: [], list3: [], list4: [] });
   

   useEffect(() => {
     const getData = async () => {
       const result = await fetchData();
       setData(result);
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
               <TableTitle>Tabela 1</TableTitle>
               {data.list1.map((item, index) => (
                 <ListItem key={index}>
                   <ItemImage src={item.image} alt={`Item ${index + 1}`} />
                   <ItemText>{item.text}</ItemText>
                   <ItemNumber>{item.id}</ItemNumber>
                 </ListItem>
               ))}
             </TableWrapper>
             <TableWrapper>
               <TableTitle>Tabela 2</TableTitle>
               {data.list2.map((item, index) => (
                 <ListItem key={index}>
                   <ItemImage src={item.image} alt={`Item ${index + 1}`} />
                   <ItemText>{item.text}</ItemText>
                   <ItemNumber>{item.id}</ItemNumber>
                 </ListItem>
               ))}
             </TableWrapper>
           </TableRow>
           <TableRow>
             <TableWrapper>
               <TableTitle>Tabela 3</TableTitle>
               {data.list3.map((item, index) => (
                 <ListItem key={index}>
                   <ItemImage src={item.image} alt={`Item ${index + 1}`} />
                   <ItemText>{item.text}</ItemText>
                   <ItemNumber>{item.id}</ItemNumber>
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