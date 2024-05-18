import React from 'react';
import { HomeBodyContainer, HomePageContainer } from './HomePage.styles';
import {NavHeader} from '../../components/HeaderMenu/HeaderMenu.ui';

export default function HomePage() {
    
    return (
     <HomePageContainer>
        <NavHeader/>
        <HomeBodyContainer>

        </HomeBodyContainer>
     </HomePageContainer>
    );
  }