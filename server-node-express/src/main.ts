function add(n1:number, n2:number):number{
    return n1+n2
}

console.log('Hola Mundo!')

console.log('Hola!')

console.log(`El resultado es: ${add(2,2)}`)

import express, { Request, Response } from 'express'

const app = express()
const port = 3000
app.use(express.json())


app.get('/hello', (req:Request, res:Response) => {
    console.log('Llega una peticion de Hello World!!')
    res.send('Hello World!')
})

app.post('/add',  (req, res:Response) => {
    console.log(req)
    //const body = JSON.parse(req.body)
    const n1 = req.body.n1
    const n2 = req.body.n2
    const resultado = add(n1,n2)
    console.log(`Suma: ${resultado}`)
    res.send(JSON.stringify(resultado))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
