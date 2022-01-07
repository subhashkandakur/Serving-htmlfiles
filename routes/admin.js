const path = require('path');
const express = require('express');
//const bodyParser = require('body-parser');

//const app= express();


const router = express.Router();
//app.use(bodyParser.urlencoded({extended:false}));


router.get('/add-product',(req,res, next)=>{
   res.sendFile(path.join(__dirname,'../','veiws','add-product.html'))
    
});


   

    
            
    
    

    
    
   



  

module.exports= router;