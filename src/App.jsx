import { Routes, Route } from 'react-router-dom';
import React from "react";
import './App.css';
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import WatchHistory from "./pages/WatchHistory"
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/WatchHistory' element={<WatchHistory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
