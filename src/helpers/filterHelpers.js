export const getUniqueFilters = (filters, property) => {
  if (!filters.length) return filters;

  return filters.reduce((uniques, filter) => {
    if (
      !uniques.length ||
      uniques.every((unique) =>
        property ? unique[property].name !== filter[property].name : unique.name !== filter.name
      )
    )
      uniques.push(filter);

    return uniques;
  }, []);
};
