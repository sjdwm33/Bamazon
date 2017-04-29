CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
item_id			INT 			NOT NULL AUTO_INCREMENT,
product_name	VARCHAR(100)	NOT NULL,
department_name	VARCHAR(100)	NULL,
price			DECIMAL(10, 2)	NOT NULL,
stock_quantity	INT 			NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vintage Lamp", "houseware", 50, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Big Screen HD TV", "electronics", 200, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater Vest", "clothing", 20, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leather Boots", "clothing", 50, 95);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "electronics", 30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "electronics", 400, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lounge Chair", "houseware", 60, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flower-scented Candle", "houseware", 200, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Table", "houseware", 50, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Notre Dame Sweatshirt", "clothing", 80, 50);

