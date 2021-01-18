exports.formatItemForList = ({
  id = "",
  title = "",
  price = 0,
  currency_id = "",
  condition = "",
  thumbnail = "",
  shipping: { free_shipping = "" } = {},
  address: { state_name = "" } = {},
}) => ({
  id,
  title,
  price: {
    currency: currency_id,
    amount: price,
    decimals: 0,
  },
  picture: thumbnail,
  condition,
  free_shipping,
  location: state_name,
});
