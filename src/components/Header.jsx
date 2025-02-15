import { NavLink } from "react-router";

function Header() {

    return (
      <header>
     <h1>Jazmin Guillen</h1>
     <nav>
    <NavLink className={"navLinks"} to="/">About</NavLink>

    <NavLink className={"navLinks"} to="/portfolio">Portfolio</NavLink>

    <NavLink className={"navLinks"} to="/contactpage">Contact</NavLink>

    <NavLink className={"navLinks"} to="/resumepage">Resume</NavLink>
     </nav>
      </header>
    )
  }
  export default Header;