import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Auth from './Pages/Auth';
import Pnf from './Pages/Pnf';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='*' element={<Pnf/>}/>
    </Routes>
     
    </>
  );
}

export default App;
