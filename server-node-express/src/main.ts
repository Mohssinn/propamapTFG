import express, { Request, Response } from 'express'


const app = express()
const port = 3000
app.use(express.json())
const knex = require('../db/db')


app.get('/', (req:Request, res:Response) => {
    const { topLeft, bottomRight, proj } = req.body

    //Logica esquinas: topLeft[0 (x),1 (y)], bottomRight[0 (x),1 (y)] se dibuja el area a partir de esas esquinas.
    knex.select(knex.raw(`(ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo`))
    .from('worldtifmauto')
    .crossJoin(knex.raw(`st_polygonfromtext('POLYGON((${topLeft[0]} ${topLeft[1]}, ${topLeft[0]} ${bottomRight[1]}, ${bottomRight[0]} ${bottomRight[1]}, ${bottomRight[0]} ${topLeft[1]}, ${topLeft[0]} ${topLeft[1]}))', ${proj}) as geom`))
    .where(knex.raw(`st_intersects(rast, geom)`))
    .groupby('rast')
    .then((data:any) => {
        res.send(data)
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
