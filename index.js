var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var compression = require("compression");
var morgan = require("morgan");
var PORT = Number(process.env.PORT || 5000);
var counters = require("./lib/counters");

const path = require("path");

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(compression());

app.use(express.static(path.join(__dirname, "build")));

function sendFile(name) {
  return function (req, res) {
    res.sendFile(__dirname + "/build/" + name);
  };
}

app.get("/", sendFile("index.html"));
// app.get("/app.js", sendFile("app.js"));
// app.get("/app.css", sendFile("app.css"));

// [json] GET /api/v1/counters
// => [
// =>   {id: "asdf", title: "boop",  count: 4},
// =>   {id: "zxcv", title: "steve", count: 3}
// => ]
app.get("/api/v1/counters", function (req, res) {
  res.json(counters.all());
});

// [json] POST {title: "bob"} /api/v1/counter
// =>
// =>   {id: "qwer", title: "bob",   count: 0}
app.post("/api/v1/counter", function (req, res) {
  console.log(req.body);
  res.json(counters.create(req.body.title));
});

// [json] DELETE {id: "asdf"} /api/v1/counter
// => asdf
app.delete("/api/v1/counter", function (req, res) {
  res.json(counters.delete(req.body.id));
});

// [json] POST {id: "qwer"} /api/v1/counter/inc
// =>   {id: "qwer", title: "bob",   count: 1}
app.post("/api/v1/counter/inc", function (req, res) {
  res.json(counters.inc(req.body.id));
});

// [json] POST {id: "zxcv"} /api/v1/counter/dec
// =>   {id: "zxcv", title: "steve", count: 2},
app.post("/api/v1/counter/dec", function (req, res) {
  res.json(counters.dec(req.body.id));
});

app.get("*", sendFile("index.html"));
app.head("*", sendFile("index.html"));

app.listen(PORT, console.log.bind(null, "PORT: " + PORT));
