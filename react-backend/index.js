const express = require("express");
const cors = require("cors");
const meals = require("./menu.json");
const jsonFile = require('edit-json-file');
let file = jsonFile(`./menu.json`);

const app = express();

app.use(cors());

app.get("/meals", function (req, res) {
	//console.log(meals.dishes);

	res.json(meals.dishes);
	//console.log(res.json(meals.dishes));
//
	//function sobreEscribir (data) {
	//    console.log("SOBREESCRIBIENDO...")
	//    file.empty();
	//    console.log("Archivo vacio " + file.get());
	//    //console.log(data);
	//	console.log(data)
	//    file.set(file, data);
	//    file.save();
	//    console.log(file.get());
	//}
//
	//sobreEscribir(res.json(meals.dishes));

});

app.get("/meals/:id", function (request, response) {
	const { id } = request.params;
	const meal = meals.dishes.find((x) => x.id.toString() === id.toString());
	response.json(meal);
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log(
		`Servidor React Meals escuchando peticiones en el puerto ${port}`
	);
});


