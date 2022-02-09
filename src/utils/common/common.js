const pluck = (list, key) => list.map((item) => item[key]);
const unique = (array) => [...new Set(array)];

const getYear = (date) => new Date(date).getFullYear().toString();

const isHTML = (text) => {
  const tagExpression = /<\/?[\w\s="/.':;#-/]+>/gi;
  return tagExpression.test(text);
};

export { pluck, unique, getYear, isHTML };
