import styled from 'styled-components';

export const HomePageContainer = styled.div.attrs({
  className: "home-page-container",
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
 
`;

export const HomeBodyContainer = styled.div.attrs({
  className: "home-body-container"
})`
  flex: 1;
  overflow-y: auto;
  background-color: #252525;
  padding: 0px;
`;

export const TablesContainer = styled.div.attrs({
  className: "table-container"
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left:30px;
  padding-right:30px;
  margin-top:80px;
  margin-bottom:20px;
`;

export const TableRow = styled.div.attrs({
  className: "table-row"
})`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const TableWrapper = styled.div.attrs({
  className: "table-wrapper"
})`
  flex: 1;
  background-color: #0000007b;
  padding: 10px;
  border-radius: 8px;
  color: white;
 
`;

export const TableTitle = styled.h2.attrs({
  className: "table-title"
})`
  margin: 0 0 10px 0;
  color: #fff;
  text-align: start;
`;

export const ListItem = styled.div.attrs({
  className: "list-item"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  background-color: #0000005e;
  border-radius: 4px;
`;

export const ItemImage = styled.img.attrs({
  className: "table-image"
})`
  width: 184px;
  height: 69px;
  border-radius: 10%;
  margin-right: 10px;
`;

export const ItemText = styled.div.attrs({
  className: "item-text"
})`
  flex: 1;
  color: white;
`;

export const ItemNumber = styled.div.attrs({
  className: "item-number"
})`
  margin-left: 10px;
  color: white;
`;
