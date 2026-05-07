import { useState } from 'react';

// layouts
import Header from './components/layout/Header/Header';
import Footer from "./components/layout/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import IndexPage from '@/pages/Index/IndexPage';

import AppealPage from '@/pages/AppealPage/AppealPage';




function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="appeal/demo/" element={<AppealPage />}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
