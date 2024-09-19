import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import HomeMobile from './pages/HomeMobile';
import Fondo from './pages/Fondo';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomeMobile />} />
        <Route path='/fondo' element={<Fondo />} />
      </Routes>
    </Router>
  );
}

export default App;
