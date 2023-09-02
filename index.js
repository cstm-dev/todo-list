import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const db = "todoAppDb";
const _URI = `mongodb://127.0.0.1:27017/${db}`;

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render(`${__dirname}/views/index.ejs`);
});

app.post("/", (req, res) => {
	res.render(`${__dirname}/views/index.ejs`);
});

app.get("/today", (req, res) => {
	res.render(`${__dirname}/views/today.ejs`, { todayList: todayList });
});

app.post("/today", (req, res) => {
	if (req.body.textTodoEntry) {
		todayList[todayList.indexOf("")] = req.body.textTodoEntry;
	}

	if (req.body["newEntry.x"]) {
		todayList.push("");
	}

	res.render(`${__dirname}/views/today.ejs`, { todayList: todayList });
});

app.get("/work", (req, res) => {
	res.render(`${__dirname}/views/work.ejs`, { workList: workList });
});

app.post("/work", (req, res) => {
	if (req.body.textTodoEntry) {
		workList[workList.indexOf("")] = req.body.textTodoEntry;
	}

	if (req.body["newEntry.x"]) {
		workList.push("");
	}

	res.render(`${__dirname}/views/work.ejs`, { workList: workList });
});

try {
	await mongoose.connect(_URI);
	console.log("Connection established.");

	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
} catch (error) {
	console.error("Error encountered:", error);
}
