--area1
SELECT (ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-3.352095 40.514020, -3.352095 40.511310, -3.346303 40.511310,  -3.346303 40.514020, -3.352095 40.514020))', 4326) as geom 
WHERE ST_Intersects(rast,geom)
GROUP BY rast;

--area2
SELECT (ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-3.354662 40.520551, -3.354662 40.503524, -3.334452 40.503524,  -3.334452 40.520551, -3.354662 40.520551))', 4326) as geom
WHERE ST_Intersects(rast,geom)
GROUP BY rast;

--area3
SELECT (ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-3.421641 40.500916, -3.421641 40.469781, -3.316520 40.469781,  -3.316520 40.500916, -3.421641 40.500916))', 4326) as geom
WHERE ST_Intersects(rast,geom)
GROUP BY rast;

--area4
SELECT (ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-3.516664 40.503799, -3.516664 40.441233, -3.299763 40.441233,  -3.299763 40.503799, -3.516664 40.503799))', 4326) as geom
WHERE ST_Intersects(rast,geom)
GROUP BY rast;

--area5
SELECT (ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-3.865177 40.550858, -3.865177 40.238896, -3.498879 40.238896,  -3.498879 40.550858, -3.865177 40.550858))', 4326) as geom                          
WHERE ST_Intersects(rast,geom)
GROUP BY rast;

--area6
SELECT (ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-4.017873 40.683825, -4.017873 40.193006, -3.366791 40.193006,  -3.366791 40.683825, -4.017873 40.683825))', 4326) as geom
WHERE ST_Intersects(rast,geom)
GROUP BY rast;

--comprobar tilas que ocupa un área
select rid,rast::geometry
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-3.865177 40.550858, -3.865177 40.238896, -3.498879 40.238896,  -3.498879 40.550858, -3.865177 40.550858))', 4326) as geom
WHERE ST_Intersects(rast,geom);

--para filtrar los resultados quitando las filas con NULL en geo (no es necesario)
WITH TAB AS (SELECT (ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).val as val, ST_AsText((ST_PixelAsPolygons(st_union(st_clip(rast, geom)))).geom) as geo
FROM worldtifmauto
CROSS JOIN st_polygonfromtext('POLYGON((-3.421641 40.500916, -3.421641 40.469781, -3.316520 40.469781,  -3.316520 40.500916, -3.421641 40.500916))', 4326) as geom
WHERE ST_Intersects(rast,geom)
GROUP BY rast;)
SELECT *
FROM TAB
WHERE geo is not null;