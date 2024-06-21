import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  SteamPageContainer, 
  SteamBodyContainer,
  CenteredContainer,
  CodeInput,
  SubmitButton, 
} from './SteamPage.styles';
import { NavHeader } from '../../components/HeaderMenu/HeaderMenu.ui';
import AuthContext from '../../AuthContext';



export default function SteamPage() {
  
    const navigate = useNavigate();
    const [code, setCode] = useState('');
  
    const handleSteamClick = () => {
      // Handle code submission
      navigate(`/homepage`);
    };

  return (
    <SteamPageContainer>
      <NavHeader />
      <SteamBodyContainer>
      <CenteredContainer>
          <CodeInput 
            type="text" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            placeholder="Enter Code"
          />
          <SubmitButton onClick={handleSteamClick}>Confirm</SubmitButton>
        </CenteredContainer>
      </SteamBodyContainer>
    </SteamPageContainer>
  );
}
