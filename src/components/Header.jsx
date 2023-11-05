import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/mainlogo.png";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="Main Logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
