import axios from "axios";
import StudentForm from "../component/form";
import { useLocation } from "react-router-dom";

const Update = (props) => {
  const location=useLocation();
  const Apiupdate=async (data)=>{
    axios.put(`http://localhost:3002/update/${location.state.id}`,data).then(res=>{console.log(res);}).catch(err=>{console.log(err);});
  }
  return (
    <>
    <h3>EDIT STUDENT DATA </h3>
      <StudentForm
        res={true}
        Apifunction={Apiupdate}
        name={location.state.name}
        id={location.state.id}
        branch={location.state.branch}
        cgp={location.state.cgp}
      ></StudentForm>
    </>
  );
};
export default Update;
