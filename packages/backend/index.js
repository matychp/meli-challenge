const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { itemsRouter } = require("./src/routes/itemsRoute");

app.use(cors());
app.use(express.json());

app.use("/api", itemsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
