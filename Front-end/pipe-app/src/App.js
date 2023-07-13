import "./App.css";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Notfound from "./components/Notfound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Games from "./pages/Games";
import Game from "./pages/Game";
import Collection from "./pages/Collection";
import Charts from "./pages/Charts";
import Profile from "./pages/Profile";
import Developer from "./pages/Developer";
import ScrollToTop from "./components/Scrolltotop";
import CategoryOne from "./pages/CategorieOne";

export const LoginContext = createContext();

function App() {
  const [login, setLogin] = useState();
  
  useEffect(() => {
    if (localStorage.getItem("username") === null) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  });
  return (
    <div className="App">
      <LoginContext.Provider value={[login, setLogin]}>
        <BrowserRouter>
          <Header>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/search" element={<Search />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:id" element={<CategoryOne/>} />
              <Route path="/all" element={<Games />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/all/:id" element={<Game />} />
              <Route path="/collections" element={<Collection />} />
              <Route path="/developer/:id" element={<Developer />} />
              <Route path="/profile/" element={<Profile />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Header>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
