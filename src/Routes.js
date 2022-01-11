import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsContextProvider from "./contexts/cardsContext";
import CommentContextProvider from "./contexts/commentContext";
import RegistrationContextProvider from "./contexts/registrationContext";
import AllCardsPage from "./pages/AllCardsPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";

const MyRoutes = () => {
  return (
    <RegistrationContextProvider>
      <CardsContextProvider>
        <CommentContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/shop" element={<AllCardsPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/detail/:id" element={<EditPage />} />
              <Route path="/shop/detail/:id" element={<DetailPage />} />
            </Routes>
          </BrowserRouter>
        </CommentContextProvider>
      </CardsContextProvider>
    </RegistrationContextProvider>
  );
};

export default MyRoutes;
