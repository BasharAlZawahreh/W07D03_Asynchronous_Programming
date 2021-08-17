const express = require("express");

const app = express();
const port = 5000;
const users= [{name:"ahmad"}]
app.use(express.json());

app.get('/user',(req,res)=>{
  res.status(200);
  res.json("User1")
})
app.listen(port, () => {
  console.log(`server run on ${port}`);
});
