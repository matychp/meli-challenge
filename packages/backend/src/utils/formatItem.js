exports.formatItem = ({
  id = "",
  title = "",
  price = 0,
  currency_id = "",
  condition = "",
  pictures = [],
  sold_quantity = "",
}) => ({
  id,
  title,
  price: {
    currency: currency_id,
    amount: price,
    decimals: 0,
  },
  picture: pictures.length > 0 ? pictures[0].url : "",
  condition,
  sold_quantity,
});
