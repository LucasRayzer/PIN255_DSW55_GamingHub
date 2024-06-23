import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    idU: '',
    apelido: '',
    nomeUsuario: '',
    senha: '',
    steamId:'',
    avatar: '',
    rank: '1'
  });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
