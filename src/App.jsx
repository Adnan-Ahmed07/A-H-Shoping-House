import Home from "./components/Home.jsx";
import { Route,Routes } from "react-router-dom";
import "./App.css";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import Category from "./components/Category.jsx";
const App = ()=>{ 
  return (
    <Routes>
      <Route path = "" element={<Home/>}/>
      <Route path="/category" element = {<Category url = 'http://localhost:8000/category'/>}/>
      <Route path="/men" element = {<Men/>}/>
      <Route path="/women" element = {<Women/>}/>
    </Routes>
    
  )
}

export default App;