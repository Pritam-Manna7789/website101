import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/Login/login"
import Register from "./pages/Login/register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<Hotel/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
