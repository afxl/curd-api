import axios, { Axios } from "axios";
import ListHeader from "../component/listHeader";
import ListItem from "../component/listItem";
import { useEffect,useState } from "react";
const Read = () => {
  const [studentList, setstudentList] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get("http://localhost:3002/read");
        console.log(res.data);
        setstudentList(res.data);
        console.log(studentList);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  },[]);
  return (
    <>
      <ListHeader></ListHeader>
      {studentList.map(el=>  <ListItem name={el.name} id={el.id} branch={el.branch} cgp={el.cgp} ></ListItem>
  )}
    </>
  );
};
export default Read;




