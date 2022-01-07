const path = require('path');
const express = require('express');


const bodyParser = require('body-parser');

const adminRoutes= require('./routes/admin');

const shoutRoutes = require('./routes/shops')
const contact = require('./routes/Contactus')
const success = require('./routes/success')

const  app=  express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoutes);
app.use(shoutRoutes);
app.use(contact);
app.use(success);





app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'veiws','404.html'))
});

app.listen(3500);