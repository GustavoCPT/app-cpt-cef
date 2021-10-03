import './App.css';
import React, { useState } from 'react';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';

//importar nosso provider
import { AuthProvider } from './components/Context/auth';

function App() {
  // estado signed e começa como falso
  const [signed, setSigned] = useState(false);
  
  return (
    <AuthProvider>
    <BrowserRouter>
    
      <Routes />
    
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
