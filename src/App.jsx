import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import HomeMobile from './pages/HomeMobile';
import Fondo from './pages/Fondo';
import Domande from './pages/Domande';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomeMobile />} />
        <Route path='/fondo' element={<Fondo />} />
        <Route path='/domande' element={<Domande />} />
      </Routes>
    </Router>
  );
}

export default App;
