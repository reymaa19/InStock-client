import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/warehouse">
        <div className="header__logo">
          <img src={logo} alt="InStock-logo" className="header__icon" />
          <h1 className="header__title">INSTOCK</h1>
        </div>
      </Link>

      <nav className="header__nav">
        <Link to="/warehouse">
          <h3 className="header_link">Warehouses</h3>
        </Link>
        <Link to="/inventory">
          <h3 className="header_link">Inventory</h3>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
