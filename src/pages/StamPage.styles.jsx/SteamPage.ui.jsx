import React, { useContext, useState } from 'react';
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

async function execCom1(code) {
  try {
    const response = await axios.get(`http://localhost:8080/api/executeCommands/${code}`);
    console.log('execCom1 response:', response.data);
    return response.data;
  } catch (error) {
    console.error('execCom1 error:', error);
    throw error;
  }
}

async function execCom2(code) {
  try {
    const response = await axios.get(`http://localhost:8080/api/executeCommands2/${code}`);
    console.log('execCom2 response:', response.data);
    return response.data;
  } catch (error) {
    console.error('execCom2 error:', error);
    throw error;
  }
}

export default function SteamPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const { authData, setAuthData } = useContext(AuthContext);

  const handleSteamClick = async () => {
    setAuthData({...authData, steamId: code});
    try {
      const userResponse = await axios.get(`http://localhost:8080/user/${authData.idU}/${code}`);

      const exec1 = await execCom1(code);
      console.log('execCom1 completed:', exec1);

      if (exec1 === "Funcionou") {
        console.log("roda isso aq", `http://localhost:8080/api/executeCommands2/${code}`)
        navigate(`/homepage`);
      } else {
        console.log('execCom1 não retornou "Funciona":', exec1);
      }
    } catch (error) {
      console.error('Error in handleSteamClick:', error);
    }
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
