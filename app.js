//Intializers
const express = require('express');
const app = express();
const port = 3000;

//Home Get Requests
app.get('/', (req, res)=>{
    res.send('What is Gucci');
    cosnlole.log('Success');
})

//Listen for requests
app.listen(port, ()=> console.log('Example app listening on port ' + port +'!'))