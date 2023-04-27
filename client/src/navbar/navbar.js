import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
const NavBar=()=>{
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="add">
              <p>ADD STUDENT</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <p>STUDENT LIST</p>
            </NavLink>
          </li>
          
        </ul>
      </nav>
    );
}
export default NavBar;