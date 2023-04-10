import "./footer.css";
import { ReactComponent as Home } from "../../icons/home.svg";
import { ReactComponent as Search } from "../../icons/magnifying-glass.svg";
import { ReactComponent as Menu } from "../../icons/menu.svg";
import { ReactComponent as Library } from "../../icons/library.svg";


function Footer() {
  return (
    <div class="container col-12">
      <nav className="navbar fixed-bottom  ">
        <ul className="navbar-nav d-flex flex-row w-100 ">
        <li className="iconHolder nav-item">
          <Home id="home" />
          <span className = "footer-caption" href="#" aria-current="page">Home</span> 
        </li>
        <li className="iconHolder nav-item">
          <Library id="library" />
          <span class = "footer-caption">Library</span>
        </li>
        <li className="iconHolder nav-item">
          <Search id="search" />
          <span class = "footer-caption">Search</span>
        </li>
        <li className="iconHolder nav-item">
          <Menu id="menu" />
          <span class = "footer-caption">About</span>
        </li>
        </ul>
      </nav>
    </div>
  );
}
export default Footer;
