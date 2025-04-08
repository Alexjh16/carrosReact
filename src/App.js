import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/login-pages';
import ListaCarros from "./pages/lista-carros";



function Landing(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome to my react app</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );

}

function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/lista-carros" element={<ListaCarros/>}/>
      </Routes>
    </Router>
  );
}

export default App;
