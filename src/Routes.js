import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsContextProvider from "./contexts/cardsContext";
import RegistrationContextProvider from "./contexts/registrationContext";
import AllCardsPage from "./pages/AllCardsPage";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";

const MyRoutes = () => {
  return (
    <RegistrationContextProvider>
      <CardsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/shop" element={<AllCardsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/detail/:id" element={<EditPage />} />
          </Routes>
        </BrowserRouter>
      </CardsContextProvider>
    </RegistrationContextProvider>
  );
};

export default MyRoutes;
