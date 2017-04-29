# Bamazon
### Overview
This application is a simple marketplace node application that allows users to view and purchase items from the inventory

* Run the schema.sql file in MySQL to create the database and input the initial inventory of products
* Run bamazonCustomer.js in node in order to view the available products and purchase items.
- - -
Make sure to input your database connection in a file called config.js with the following code, replacing the password with your own:
```JavaScript
	module.exports = {
	  host: 'localhost',
	  port: 3306,
	  user: 'root',
	  password: '',
	  database: 'Bamazon'
	};
  ```
- - -
* Run bamazonManager.js in node to act as a Bamazon employee and view the products in stock and products that have low inventory and have the ability to add more inventory or new products.
- - -
Any changes you make to the inventory or available products as either a customer or manager will be reflected in your MySQL database!

