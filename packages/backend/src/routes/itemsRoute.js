const express = require("express");
const axios = require("axios");
const to = require("await-to-js").default;
const { getCategories } = require("../utils/getCategories");
const { getItems } = require("../utils/getItems");
const { formatItem } = require("../utils/formatItem");

const router = express.Router();

router.get("/items", async (req, res) => {
  const { q = null } = req.query;
  let data = [];

  if (q !== null) {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
    );

    data = {
      author: {
        name: "Matias Alejandro",
        lastname: "Lopez Heredia",
      },
      categories: getCategories(response),
      items: getItems(response),
    };

    res.send(data);
  } else {
    res.status(500).send("param q not specified as query param");
  }
});

router.get("/items/:id", async (req, res) => {
  const { id = null } = req.params;
  let err, itemResponse, itemDescriptionResponse;

  [err, itemResponse] = await to(
    axios.get(`https://api.mercadolibre.com/items/${id}`)
  );
  if (err)
    return res
      .status(err.response.status)
      .send(`id endpoint failed: ${err.response.statusText}`);

  [err, itemDescriptionResponse] = await to(
    axios.get(`https://api.mercadolibre.com/items/${id}/description
  `)
  );

  if (err && err.response.status !== 404)
    return res
      .status(err.response.status)
      .send(`id description endpoint failed: ${err.response.statusText}`);

  const description = itemDescriptionResponse
    ? itemDescriptionResponse.data.plain_text
    : "";

  res.send({
    author: {
      name: "Matias Alejandro",
      lastname: "Lopez Heredia",
    },
    item: { ...formatItem(itemResponse.data, true), description },
  });
});

exports.itemsRouter = router;
