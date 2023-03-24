import './App.css';
import { Routes, Route} from "react-router-dom";
import Regiester from './components/Regietser/Regiester';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
function App() {
  return (
    <Routes>
    <Route path="/lamasocial/regiester" element={<Regiester />} />
    <Route path='/lamasocial/login' element={<Login />}/>
   <Route path='/lamasocial' element={<Home />}/>
  </Routes>
  );
}

export default App;
