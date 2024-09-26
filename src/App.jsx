import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import HomeMobile from './pages/HomeMobile';
import Fondo from './pages/Fondo';
import Domande from './pages/Domande';
import About from './pages/About';
import AboutDetails from './pages/AboutDetails';
import Goals from './pages/Goals';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomeMobile />} />
        <Route path='/fondo' element={<Fondo />} />
        <Route path='/domande' element={<Domande />} />
        <Route path='/about' element={<About />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/about/:id' element={<AboutDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
