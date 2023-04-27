import styles from "./add.module.css"
import {useState, useRef } from "react"
import axios from "axios"
import StudentForm from "../component/form"
const Add=()=>{
  const nameRef = useRef(null)
  const cgpRef = useRef(0)
  const idRef = useRef(0)
  const branchRef = useRef(null);
  let response=false;
  const Apipost =async(data)=>{
    axios
      .post("http://localhost:3002/create", data)
      .then((res) => {console.log(res)
        response=true})
      .catch((err) => {
        console.log(err)
        response=false;
      });
  }
  return (
    <div>
      <h3>ADD NEW STUDENT</h3>
      <StudentForm
        Apifunction={Apipost}
        res={true}
      ></StudentForm>
    </div>
  );
}
export default Add;