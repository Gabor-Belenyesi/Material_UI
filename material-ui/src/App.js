import logo from './logo.svg'
import './App.css'
import { Button, Checkbox } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Abaut from './components/Abaut'
import Contact  from './components/Contact'
import Art from './components/Art'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/abaut' element={<Abaut />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/art/:id' element={<Art />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
