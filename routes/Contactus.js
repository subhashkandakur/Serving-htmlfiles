const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/contactus',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'../','veiws','contactus.html'))
});
module.exports= router;