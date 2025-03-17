
import { Route, Routes } from "react-router"

import Header from "./components/Header"
import Footer from "./components/Footer"

import HomePage from "./pages/Home/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import ContactPage from "./pages/Contact/ContactPage"
// import GamePage from "./pages/Game/GamePage"
import AdminPage from "./pages/Admin/AdminPage"

import "./assets/style/app.scss"
function App() {


  return (
    <>
      <Header />
      <Routes >
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
