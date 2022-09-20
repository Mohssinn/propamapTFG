#!/bin/sh
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
  \connect $APP_DB_NAME $APP_DB_USER
  CREATE EXTENSION postgis;
  CREATE EXTENSION postgis_raster CASCADE;
EOSQL

raster2pgsql -s 4326 -d -I -C -M -R -l 4 /datos/SRTM_NE_250m_1_3.tif -F -t auto worldTifMauto | psql -d gis_database -U postgres
#raster2pgsql -s 54009 -d -I -C -M -R -l 4 /datos/GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.tif -F -t 300x300 world300x300 | psql -d gis_database -U postgres
#rm -f /datos/*

