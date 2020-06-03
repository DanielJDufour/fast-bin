const max = require('lodash.max');

const binarize = nums => {
  const nbits = max(nums).toString(2).length;
  const binary_string = nums.map(n => n.toString(2).padStart(nbits, "0")).join("");
  return { nbits, data: binary_string };
}

module.exports = binarize;
