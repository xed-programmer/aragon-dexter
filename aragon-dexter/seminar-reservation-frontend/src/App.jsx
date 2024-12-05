import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Seminar from './pages/admin/Seminar';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Router>
      <AppNavBar />
      <Routes>
      <Route path='/login' element={ <Login />} />
        <Route path='/admin' element={ <Dashboard />} />
        <Route path='/admin/seminar' element={ <Seminar />} />
      </Routes>
    </Router>
    <Outlet />
    </>
  )
}

export default App
