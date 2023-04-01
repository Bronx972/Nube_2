const client= require("./modelo/db.js");
const exp = require('express');
const app = exp();


app.set('views','./static')
app.set('view engine', 'ejs')

app.post('/',(req,res)=>{
    var queries=["CREATE TABLE IF NOT EXISTS tecsup (Nombre VARCHAR 20, Carrera VARCHAR 30, Edad INT NOT NULL)","INSERT INTO tecsup VALUES (Ricardo,Desarrollo de software,19)","INSERT INTO tecsup VALUES (Chagua,Gastronomía,20)","INSERT INTO tecsup VALUES (Parco,Veterinaria,22)"];
    client.query(queries.join(';'),(error,results)=>{
        if (error){
            throw error;
        }else{
            res.render('primero');
        }
    })
    
})

app.get('/table',(req,res)=>{
    client.query('SELECT * FROM tecsup',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.render('index',{resultado:results});
        }
    })
    
})
app.listen(3000)
console.log('Server on port 3000')