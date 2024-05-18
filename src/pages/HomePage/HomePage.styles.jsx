import styled from 'styled-components';

export const HomePageContainer = styled.div.attrs({
  className: "home-page-container",
})`
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;

`;

  export const HomeBodyContainer = styled.div.attrs({
    className: "home-body-container"
  })`
    flex : 1;
    overflow-y:auto;
    background-color: #252525;
    min-height:100vh;

  `;
  