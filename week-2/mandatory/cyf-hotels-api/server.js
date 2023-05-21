const express = require("express");
const app = express();

app.listener = app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
const { Pool } = require("pg");

const db = new Pool({
  user: "mickeyhaile", // replace with you username
  host: "localhost",
  database: "cyf_hotels",
  password: "",
  port: 5432,
});

app.get("/customers", function (req, res) {
  db.query("SELECT id, name, city, phone FROM customers")
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/products", function (req, res) {
  db.query("SELECT id, name, city, phone FROM customers")
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.get("/suppliers", function (req, res) {
  db.query(
    "SELECT p.product_name, pa.unit_price, s.supplier_name FROM products p JOIN product_availability pa ON (p.id = pa.prod_id) JOIN suppliers s ON (s.id = pa.supp_id )",
    (error, result) => {
      console.log(result);
      res.json(result.rows);
    });
});