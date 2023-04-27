const express = require("express");
const mongodb = require("mongodb");
const app = express();
const cors=require("cors")
app.use(cors())
let arr = [
  { name: "rohit", id: 56268, branch: "IT", cgp: 9 },
  { name: "rohit", id: 56267, branch: "IT", cgp: 9 },
  { name: "rohit", id: 56266, branch: "IT", cgp: 9 },
  { name: "rohit", id: 56265, branch: "IT", cgp: 9 },
];
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hey yo")
})
app.get("/read", (req, res) => {
  res.status(200).send(arr);
});
app.post("/create",(req,res)=>{
     const i = arr.findIndex((el) => el.id == req.body.id);
     if(i ===-1 && req.body.id){
      arr=[...arr,req.body]
      console.log(req.body);
      res.status(200).send(arr[0])
      
     }else{
      res.status(400).send("ggay");
     }
})
app.delete("/delete/:id", (req,res,next)=>{
    arr=arr.filter(el=>{
        if(el.id!=(+req.params.id)){
            return el
        }})
    res.status(200).send("deleted");
})
app.put("/update/:id",(req,res)=>{
    const i=arr.findIndex(el=>el.id==req.params.id)
    arr[i]=req.body;
    res.status(200).send(arr[i]);
})
app.listen(3002, () => {
  console.log("running...");
});
