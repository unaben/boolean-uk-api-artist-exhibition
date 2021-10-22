require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/* SETUP MIDDLEWARE */

const addressesRouter = require("./resources/addresses/router");
const exhibitionsRouter = require("./resources/exhibitions/router");
const ticketsRouter = require("./resources/tickets/router");
const customersRouter = require("./resources/customers/router");

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* SETUP ROUTES */

app.use("/addresses", addressesRouter);
app.use("/exhibitions", exhibitionsRouter);
app.use("/tickets", ticketsRouter);
app.use("/customers", customersRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
