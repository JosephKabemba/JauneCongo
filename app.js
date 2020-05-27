const express = require('express')
const connection = require('./config/jcongoDb');

const app = express()

app.set('view engine','ejs')
app.use(express.static('./public'))



app.get('/',(req,res)=>{
  connection.query('select * from products', (err,result)=>{

    if(err){console.log(err.message)}

    res.render('accueil',
    {
      title:'Accueil',
      result:result
    })
  })

  app.get('/items/:id',(req,res)=>{
    connection.query('select * from products where id=?',req.params.id,(err,result)=>{
      if(err){console.log(err.message)}

      if (result.length <1) {
        res.send('404')
      }else {
        res.render('items',
        {
          title:'Produits',
          produit:result[0]
        })
      }

    })
  })
})




app.listen(4000,()=>{
  console.log('server running on port 4000')
})
