import { NavLink } from "react-router";

function Header() {

    return (
      <header>
     <h1>Jazmin Guillen</h1>
     <nav>
    <NavLink to="/">About</NavLink>

    <NavLink to="/portfolio">Portfolio</NavLink>

    <NavLink to="/contactpage">Contact</NavLink>

    <NavLink to="/resumepage">Resume</NavLink>
     </nav>
      </header>
    )
  }
  export default Header;