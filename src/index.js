require('dotenv').config();
const express = require('express')
const app = express();

app.listen( process.env.PORT, ()=>{
    console.log(`\x1b[34m ***************************************************
** se levanta mi API o servidor en el puerto ${process.env.PORT}** 
*************************************************** \x1b[0m`);
} )

app.get('/', (req, res) => {
    res.send(`Hola estan en mi API`)
    
    console.log(`\x1b[35m ** estoy en home ** \x1b[0m`);
})

app.use('/books', require('./routers/books.routers'), )


// app.get('/books', (req, res) => {
//     res.send('estoy aqui en books');
// })