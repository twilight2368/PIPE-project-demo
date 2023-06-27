import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header>
        
       </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
