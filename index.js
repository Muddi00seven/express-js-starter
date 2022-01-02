/*********** import starts ***********/


'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let poolRoutes = require('./routes/routes');
const app = express();
const PORT = "8080";
/**
 * using @cors to handle web page req
 */
app.use(express.json());
app.use(cors());
/**
 * using @JwtHelper for token verification
 */
//  app.use(cors());
// app.use(JwtHelper)
app.use(bodyParser.json());
/**
 * index route for @router middleware
 */
app.use("/", poolRoutes.routes);
/**
 * @swagger route for @api's doc
 */
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

/**
 * index port
 */
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
