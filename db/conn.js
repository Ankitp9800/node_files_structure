const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ankit123:ankit123@cart.2zut0vs.mongodb.net/studentData",{
    
})
.then(()=>{
     console.log("connection success");
}).catch((err)=>console.log(err));
