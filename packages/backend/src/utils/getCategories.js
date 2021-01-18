exports.getCategories = (response) => {
  const values = response.data.filters.map((filter) => filter.values);

  let categories = values.map((value) => {
    let innerCategories = [];
    const { name, path_from_root = null } = value[0];

    if (path_from_root !== null) {
      innerCategories = path_from_root.map((path) => path.name);
    } else {
      innerCategories.push(name);
    }

    return innerCategories;
  });

  categories = categories.reduce((acc, curr) => [...acc, ...curr]);

  return categories;
};
