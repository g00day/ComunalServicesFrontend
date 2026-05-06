import { useState } from 'react';

// layouts
import Header from './components/layout/Header/Header';
import Footer from "./components/layout/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import IndexPage from '@/pages/Index/IndexPage';

import ProfilePage from "@/pages/ProfilePage/ProfilePage";




function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="profile/demo/" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
