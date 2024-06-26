import { useNavigate } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hostel Booking</span>
        <div className="navItems">
          <button className="navButton" onClick={()=>{navigate("/register")}}>Register</button>
          <button className="navButton"onClick={()=>{navigate("/login")}}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar