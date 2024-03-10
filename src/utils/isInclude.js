export function isInclude(array, field, payload) {
  const search = array.filter((i) => i[field] === payload);
  const result = {
    item: search[0] || [],
    isExist: Boolean(search.length),
  };
  return result;
}
