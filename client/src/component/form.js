import { useState,useRef } from "react"
const StudentForm =(props)=>{
  const [submitted, setsubmitted] = useState(0)
  const nameRef = useRef(null)
  const cgpRef = useRef(0)
  const idRef = useRef(0)
  const branchRef = useRef(null);
  const submitForm =async()=>{
    if (
      cgpRef.current.value > 0 &&
      idRef.current.value > 0 &&
      nameRef.current.value.trim().length > 0 &&
      branchRef.current.value.trim().length > 0 
    ) {
      const data = {
        "name": nameRef.current.value,
        "id": idRef.current.value,
        "cgp": cgpRef.current.value,
        "branch": branchRef.current.value,
      };
      props.Apifunction(data)
      props.res?setsubmitted(2):setsubmitted(1)
    }else{
      setsubmitted(1)
    }
}
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label for="sname">ENTER NAME:</label>
        <input
          type="text"
          ref={nameRef}
          id="sname"
          defaultValue={props.name}
          onChange={() => {
            setsubmitted(0);
          }}
        ></input>
        <label for="sbranch">ENTER BRANCH:</label>
        <input
          type="text"
          ref={branchRef}
          defaultValue={props.branch}
          id="sbranch"
          onChange={() => {
            setsubmitted(0);
          }}
        ></input>
        <label for="scgp">ENTER CGP:</label>
        <input
          type="number"
          step=".01"
          ref={cgpRef}
          defaultValue={props.cgp}
          id="scgp"
          onChange={() => {
            setsubmitted(0);
          }}
        ></input>
        <label for="sid">ENTER ID:</label>
        <input
          type="number"
          id="sid"
          ref={idRef}
          defaultValue={props.id}
          onChange={() => {
            setsubmitted(0);
          }}
        ></input>
        <button onClick={submitForm}>Submit</button>
        {submitted === 1 && (
          <p style={{ color: "red" }}> PLEASE ENTER CORRECT DATA</p>
        )}
        {submitted === 2 && <p style={{ color: "green" }}> FORM SUBMITTED </p>}
      </form>
    );
}
export default StudentForm;