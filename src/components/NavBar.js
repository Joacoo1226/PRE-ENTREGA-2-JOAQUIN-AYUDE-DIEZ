// src/components/NavBar.js
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">AZTECH</Link>
      <ul className="categories">
        <li><NavLink to="/category/celulares">Celulares</NavLink></li>
        <li><NavLink to="/category/procesadores">Procesadores</NavLink></li>
        <li><NavLink to="/category/placas">Placas de Video</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;

