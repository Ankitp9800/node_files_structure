const express = require('express');
require("./db/conn");
const Student = require("./model/student");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(studentRouter);

app.listen(port,()=>{
     console.log(`listening on port number ${port}`);
})