import styles from "./listItem.module.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ListItem=(props)=>{
  const [Isvisible, setIsvisible] = useState(false)
  const navigate= useNavigate()
  const showData=()=>{
    setIsvisible(!Isvisible)
  }
  const deleteStudent=()=>{
    axios
      .delete(`http://localhost:3002/delete/${props.id}`)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
      window.location.reload(true);
  }
  const updateStudent=()=>{
    navigate("/update",{state:{id:props.id,name:props.name,branch:props.branch,cgp:props.cgp}})
  }
    return (
      <div className={styles.parent}>
        <div className={styles.master} onClick={showData}>
          <div>{props.id}</div>
          <div>{props.name}</div>
          <div>{props.branch}</div>
          <div>{props.cgp}</div>
        </div>
        <div
          className={Isvisible ? styles.overlay : styles.hide}
          onClick={showData}
        >
          <button className={styles.edit} onClick={updateStudent}> EDIT</button>
          <button className={styles.delete} onClick={deleteStudent}> DELETE</button>
        </div>
      </div>
    );
}
export default ListItem;