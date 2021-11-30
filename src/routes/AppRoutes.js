import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/AddPage";
import EditPage from "../pages/EditPage";
import MainPage from "../pages/MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/edit/:editId" element={<EditPage />} />
    </Routes>
  );
};

export default AppRoutes;
