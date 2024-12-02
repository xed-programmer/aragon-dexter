import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';

function App() {
  return (
    <>
      <Router>
        <AppNavBar />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/team' element={ <Team />} />
          <Route path='/team/:id' element={ <TeamDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App