import { NavLink } from "react-router-dom";
import "../style/navbar.css"


const cambiarColor = ({isActive}: {isActive:boolean}):string => {
  return isActive ? "active_link" : "inactive_link";
};


const Navbar = () => {
  return ( 
    <nav>
      
      <NavLink className= {cambiarColor} to="/Home" >Home</NavLink>
      <NavLink className= {cambiarColor} to="/PerfilPersonaje/1011334" >PerfilPersonaje</NavLink>
      
    </nav>
   );
}
 
export default Navbar;
