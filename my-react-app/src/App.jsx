import { useState } from 'react';

// layouts
import Header from './components/layout/Header/Header';
import Footer from "./components/layout/Footer/Footer";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

// Pages
import IndexPage from '@/pages/Index/IndexPage';
import AuthPage from '@/pages/Auth/AuthPage/AuthPage';
import ChangePasswordPage from '@/pages/Auth/ChangePasswordPage/ChangePasswordPage';
import ForgotPasswordPage from '@/pages/Auth/ForgotPasswordPage/ForgotPasswordPage';
import RegistratonPage from '@/pages/Auth/RegistrationPage/RegistrationPage';
import FeedbackPage from '@/pages/Feedback/FeedbackPage';
import AppealPage from '@/pages/AppealPage/AppealPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import AppealsPage from '@/pages/AppealsPage/AppealsPage';
import PasswordResetPage from '@/pages/auth/PasswordResetPage/PasswordResetPage';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/appeals" element={<AppealsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/registration" element={<RegistratonPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/appeal" element={<AppealPage />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
