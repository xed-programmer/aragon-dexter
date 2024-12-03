import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Seminar from './pages/admin/Seminar';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <>
    <Router>
      <AppNavBar />
      <Routes>
        <Route path='/admin' element={ <Dashboard />} />
        <Route path='/admin/seminar' element={ <Seminar />} />
      </Routes>
    </Router>
    <Outlet />
    </>
  )
}

export default App
