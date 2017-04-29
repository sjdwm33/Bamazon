const mysql = require("mysql");
const inquirer = require("inquirer");
const appConfig = require("./config");


var connection = mysql.createConnection(appConfig.config);


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Bamazon");
  displayItems();
  setTimeout(purchaseProcess, 1000);
  
});


function displayItems(){
	connection.query("SELECT * FROM Products", function(err, res){
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
        	console.log("ID: " + res[i].item_id + " || Product Name: " + res[i].product_name
          	+ " || Price: $" + res[i].price);
		};
	})

};

function purchaseProcess(){
	inquirer.prompt([
	 {
		name: "id_request",
		type: "input",
		message: "What is the ID of the product you are interested in purchasing?"
	 },
	 {
	 	name: "units_request",
	 	type: "input",
	 	message: "How many units would you like?"
	 }
	]).then(function(answer){
			connection.query("SELECT * FROM Products WHERE ?", {item_id: answer.id_request}, function(err, res){
			
				// console.log(res[0].item_id);
				if (err){
					console.log("An error");
				}
				else if (res.stock_quantity === 0){
					console.log("Sorry, this is not in stock!")
				}
				else{
					
					connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", 
  						[res[0].stock_quantity - answer.units_request,answer.id_request],
				 		 function(err, data) {
						if (err) {
							console.log("An error with the database")
						};
						// console.log(res.stock_quantity);
						console.log("That will be $" + (res[0].price * answer.units_request))
					});	
				}
			});
	});
}





