import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import HomeMobile from './pages/HomeMobile';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomeMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
