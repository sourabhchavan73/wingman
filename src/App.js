import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./layout/appLayout/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Sales from "./pages/Sales";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="chat" element={<Chat />} />
            <Route path="sales" element={<Sales />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
