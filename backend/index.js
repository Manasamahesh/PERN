const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database.js");
app.listen(5000,() => {
	console.log("server has started on 5000 ");
});

app.post("/createList",async(req,res)=>{
try{
const{description}=req.body;
	const newlist = await pool.query("Insert Into pernStack values($1)",[description])
res.json(newlist.rows[1]);
}catch(e){
res.json("false");
}})

app.get("/fetchList",async(req,res)=>{
try {
const getall = await pool.query("select * From pernStack");
res.json(getall.rows);
}catch(e){
console.log("fetchlist error",e);
res.json(e);
}})

app.delete("/deleteList/:id",async(req,res)=>{
try{
const {id}=req.params;
const deleteList = await pool.query("delete from pernStack where id= $1",[id])
res.json("item have been removed from list");
}catch(e){
console.log("error",e);
}})
app.use(cors());
app.use(express.json());


