import './App.css';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div class="wrapper">
      
      <Routes />
    </div>
    </BrowserRouter>
  );
}

export default App;
