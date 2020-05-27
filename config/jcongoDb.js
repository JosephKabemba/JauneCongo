const mysql = require('mysql')

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12345678',
  database:'jaune_congo'
})

connection.connect((err)=>{
   if(err){console.log(err.message)}
   console.log('Connected to the database');
 })

 module.exports = connection
