create database api_psql;

create table userrrr(

        id SERIAL PRIMARY KEY,
        name varchar(100) NOT NULL,
        email TEXT
)

INSERT INTO users (name, email) VALUES ('gaston', 'gm_tandil@hotmail.com');