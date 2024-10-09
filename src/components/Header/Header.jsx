import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <NavLink to="/warehouse">
        <img src={logo} alt="InStock-logo" className="header__logo" />
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/warehouse" className="header__link header__link--active">
          <h3>Warehouses</h3>
        </NavLink>
        <NavLink to="/inventory" className="header__link header__link--active">
          <h3>Inventory</h3>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
