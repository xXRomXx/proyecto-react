const express = require("express");
const cors = require("cors");
const meals = require("./menu.json");

const app = express();

app.use(cors());

app.get("/meals", function (_, response) {
	response.json(meals);
});

app.get("/meals/:id", function (request, response) {
	const { id } = request.params;
	const meal = meals.find((x) => x.id.toString() === id.toString());
	response.json(meal);
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log(
		`Servidor React Meals escuchando peticiones en el puerto ${port}`
	);
});
