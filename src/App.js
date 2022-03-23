import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import ContentList from './components/ContentList';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Accueil</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Accueil/> } />
        <Route path="/:num" element={ <Accueil/> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <footer>
        Super site
      </footer>
    </div>
  );
}

export default App;
