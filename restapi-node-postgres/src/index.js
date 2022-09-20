const express = require('express');
const app = express();

//middlewares
app.use(express.json()); //cada vez que envien un dato en json el server lo entiende y lo convierte en obj de js
app.use(express.urlencoded({extended : false})); //para procesar y entender datos de un formulario solo aceptamos datos como texto y numeros

//routes
app.use(require('./routes/index'));

app.listen(4000);
console.log('Server on port 4000');