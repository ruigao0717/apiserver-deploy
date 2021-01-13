require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json()); // change body's content to js
app.use(morgan("dev"));

app.use("/v1", routes);


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});