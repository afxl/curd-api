import { Outlet } from "react-router-dom";
import NavBar from "./navbar/navbar";

const Home =()=>{
    return (
      <>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </>
    );
}
export default Home;