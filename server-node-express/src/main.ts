import express, { Request, Response } from 'express'


const app = express()
const port = 3000
app.use(express.json())
const knex = require('../db/db')


app.get('/', (req:Request, res:Response) => {
    knex.select().from('worldtifmauto').limit(1).then((data:any) => {
        res.send(data)
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
