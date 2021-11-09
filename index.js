const PORT = 8000;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("node-fetch");
require("dotenv").config();
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// get all payments
// http://localhost:8000/payments
app.get("/payments", async (req, res) => {
  const keyspace = "app";
  const collection = "payments";
  const url = `https://d01c957b-0903-43c0-91ee-c8012f4975aa-australiaeast.apps.astra.datastax.com/api/rest/v2/namespaces/${keyspace}/collections/${collection}?page-size=20`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": process.env.ASTRA_TOKEN,
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      res.json(json);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get one account
// http://localhost:8000/accounts/4eb872e8-cccc-4db3-bd96-acc317ac0dcd
app.get("/accounts/:id", (req, res) => {
  const keyspace = "app";
  const collection = "accounts";
  const url = `https://d01c957b-0903-43c0-91ee-c8012f4975aa-australiaeast.apps.astra.datastax.com/api/rest/v2/namespaces/${keyspace}/collections/${collection}/${req.params.id}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": process.env.ASTRA_TOKEN,
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      res.json(json);
    })
    .catch((err) => {
      console.log(err);
    });
});

// middleware to handle errors
function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found - " + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
