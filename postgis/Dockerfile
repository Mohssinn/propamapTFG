FROM postgis/postgis:latest
MAINTAINER MOHSSIN mohssin.nagib@edu.uah.es
RUN apt-get update
RUN apt-get -y install wget
RUN apt-get -y install unzip
RUN apt-get -y install postgis
RUN apt-get -y install sudo
RUN usermod -aG sudo postgres

ENV PGDATA=/var/lib/postgresql/data/pgdata
ENV POSTGIS_ENABLE_OUTDB_RASTERS=1
ENV POSTGIS_GDAL_ENABLED_DRIVERS=ENABLE_ALL


#COPY *.sql /docker-entrypoint-initdb.d/

RUN mkdir datos
RUN wget "https://drive.google.com/uc?export=download&id=1JZ-KDNuOamDE0_C4kv2LqmQpzPGZwiJi" -O "./datos/SRTM_NE_250m_1_3.tif"

RUN chmod 777 ./datos
RUN chmod 777 ./datos/SRTM_NE_250m_1_3.tif

#RUN wget -P ./datos https://cidportal.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_BUILT_LDSMT_GLOBE_R2018A/GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K/V2-0/GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.zip
#RUN unzip ./datos/GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.zip -d ./datos
#RUN chmod 777 ./datos
#RUN chmod 777 ./datos/GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.tif

USER postgres

#RUN pg_createcluster 13 main --start

#RUN /etc/init.d/postgresql start &&\
#    createdb -O postgres gis_database &&\
#    psql -u postgres --command "CREATE DATABASE gis_database;" &&\
#    psql -d gis_database -U postgres --command "\c gis_database" &&\
#    psql -d gis_database -U postgres --command "CREATE EXTENSION postgis;" &&\
#    psql -d gis_database -U postgres --command "CREATE EXTENSION postgis_raster CASCADE;" &&\
#    raster2pgsql -s 3035 -d -I -C -M -R -l 4 ./datos/N20E31.tif -F -t 5000x5000 madridalcala5000x5000 | psql -d gis_database -U postgres


#USER root
#RUN /etc/init.d/postgresql start &&\
#    raster2pgsql -s 3035 -d -I -C -M -R -l 4 N20E31.tif -F -t 500x500 madridalcala5000x5000 | psql -d gis_database -U postgres

#USER root
#RUN rm GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.tif
#RUN rm GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.zip

USER root
RUN chmod 777 /datos/SRTM_NE_250m_1_3.tif
#RUN chmod 777 /datos/GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.tif
#RUN chmod 777 /datos/GHS_BUILT_LDS2014_GLOBE_R2018A_54009_1K_V2_0.zip

USER postgres

EXPOSE 5432

RUN chmod -R 777 /var/lib/postgresql/data

CMD ["postgres"]
