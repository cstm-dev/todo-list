import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let todayList = ["srflökgs", "ajdögsd", "skldöjgsd", "dgjs"];
let workList = [];

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
    todayList[todayList.indexOf("")] = req.body.textTodoEntry
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
    workList[workList.indexOf("")] = req.body.textTodoEntry
  }

  if (req.body["newEntry.x"]) {
    workList.push("");
  }

  res.render(`${__dirname}/views/work.ejs`, { workList: workList });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
