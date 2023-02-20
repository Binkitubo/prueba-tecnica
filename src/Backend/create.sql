CREATE TABLE products (
   products_id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   description TEXT,
   price NUMERIC(10,2) NOT NULL,
   color VARCHAR(255)
);

CREATE TABLE "user" (
   id SERIAL PRIMARY KEY,
   email VARCHAR(255) NOT NULL
   password VARCHAR(255) NOT NULL,
   username VARCHAR(255) NOT NULL,
);