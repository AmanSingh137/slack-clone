import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
      <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AppBody>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`