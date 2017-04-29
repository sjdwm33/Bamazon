const mysql = require("mysql");
const inquirer = require("inquirer");
const appConfig = require("./config");


var connection = mysql.createConnection(appConfig.config);


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Bamazon");
  menuOptions();
});

function menuOptions(){
	inquirer.prompt({
		name: "option",
		type: "list",
		message: "What would you like to do?",
		choices: ["View products for sale", "View low inventory", "Add to inventory", "Add new product"]
	}).then(function(answer){
		switch(answer.option){
			case "View products for sale":
				viewProducts();
			break;

			case "View low inventory":
				lowInventory();
			break;

			case "Add to inventory":
				addInventory();
			break;

			case "Add new product":
				addProduct();
			break;
		}
	});
};

function viewProducts(){
	connection.query("SELECT * FROM Products", function(err, res){
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
        	console.log("ID: " + res[i].item_id + " || Product Name: " + res[i].product_name
          	+ " || Price: $" + res[i].price + "|| Quantity: " + res[i].stock_quantity);
		};
	})
};

function lowInventory(){
	connection.query("SELECT * FROM Products WHERE stock_quantity <= 5", function(err, res){
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
        	console.log("ID: " + res[i].item_id + " || Product Name: " + res[i].product_name
          	+ " || Price: $" + res[i].price + "|| Quantity: " + res[i].stock_quantity);
		};
	})
};

function addInventory(){
	inquirer.prompt([
		{
			name: "update_item",
			type: "input",
			message: "What is the ID of the item you would like to add inventory to?",
		},
		{
			name: "add_inventory",
			type: "input",
			message: "How much inventory would you like to add?"
		}
	]).then(function(answer){
		connection.query("SELECT * FROM Products WHERE ?", {item_id: answer.update_item}, function(err, res){
			if(err){
				console.log("error");
			}
			var newStock = parseInt(answer.add_inventory);
			connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [res[0].stock_quantity + newStock, answer.update_item], function(err, data){
				if (err) {
					console.log("update error");
				}
				console.log('Inventory has been added!');
			});
		});
	});
}

function addProduct(){
	inquirer.prompt([
		{
			name: "name",
			type: "input",
			message: "What is the name of the new product you are adding?",
		},
		{
			name: "department",
			type: "input",
			message: "What department does this product belong in?"
		},
		{
			name: "price",
			type: "input",
			message: "How much does the product cost?",
		},
		{
			name: "stock",
			type: "input",
			message: "How much inventory of the product do you have?",
		},
	]).then(function(answer){
		var newProductStock = parseInt(answer.stock);
		connection.query("INSERT INTO products SET ?", {
			product_name: answer.name,
			department_name: answer.department,
			price: answer.price,
			stock_quantity: newProductStock
		}, function(err, data){
			if (err){
				console.log("addition error");
			}
			console.log("New product added!")
		})
	});
};
