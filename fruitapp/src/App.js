import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import FAQ from './components/Faq/Faq';
import About from './components/About/About';
import Login from './components/login/login';
import Register from './components/register/register';
import HelloChat from './components/Chat/HelloChat';
import Loading from './components/Chat/Loading';
import Chatbot from './components/Chat/Chatbot';
import Translator from './components/Translater/Translater';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hellochat" element={<HelloChat />} />
      <Route path="/translator" element={<Translator/>} />
    </Routes>
  </Router>
    
    
);

}

export default App;
