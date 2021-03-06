const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/static"));

app.get("/api/contacts", (req, res) => {
	return db.Contact.findAll()
		.then(contacts => res.send(contacts))
		.catch(err => {
			console.log("There was an error querying contacts", JSON.stringify(err));
			return res.send(err);
		});
});

app.post("/api/contacts", (req, res) => {
	// TODO
});

app.delete("/api/contacts/:id", (req, res) => {
	// TODO
});

app.put("/api/contacts/:id", (req, res) => {
	// TODO
});

app.listen(3000, () => {
	console.log("Server is up on port 3000");
});
