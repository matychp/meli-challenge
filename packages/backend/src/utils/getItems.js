const { formatItemForList } = require("./formatItemForList");

exports.getItems = (response) => {
  let items = [];
  const categoryFilter = response.data.results.slice(0, 4);

  items = categoryFilter.map((item) => formatItemForList(item));

  return items;
};
