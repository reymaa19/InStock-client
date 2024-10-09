import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <NavLink to="/warehouse">
          <img src={logo} alt="InStock-logo" className="header__logo" />
        </NavLink>

        <nav className="header__nav">
          <NavLink to="/warehouse" className="header__link">
            <h3>Warehouses</h3>
          </NavLink>
          <NavLink to="/inventory" className="header__link">
            <h3>Inventory</h3>
          </NavLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
