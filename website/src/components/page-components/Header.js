import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h1 className="logo col-2">RTTM</h1>
          <div className="navbar-nav col-15 justify-content-center">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink exact to="/video-player" className="nav-link" activeClassName="active">
              Demo
            </NavLink>
            <NavLink exact to="/gallery" className="nav-link" activeClassName="active">
              Gallery
            </NavLink>
            <NavLink exact to="/technologies" className="nav-link" activeClassName="active">
              Technologies
            </NavLink>
            <NavLink exact to="/about-us" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;