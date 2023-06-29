import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Notfound from "./components/Notfound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/categories" element={<Categories/>}/>
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
