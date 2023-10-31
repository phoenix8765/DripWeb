import logo from './logo.svg';
import './App.css';
import Navbar from './component/MyNavbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MyHome  from './component/MyHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<MyHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
