/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const set = new Set(items);
  const conv = Array.from(set);
  return conv;
};

module.exports = removeDuplicateItems;
