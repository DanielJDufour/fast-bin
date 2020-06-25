const max = require('lodash.max');

const binarize = ({ data: nums, nbits, sep="" }) => {
  if (nbits === undefined || nbits === null) nbits = max(nums).toString(2).length;
  const binary_string = nums.map(n => n.toString(2).padStart(nbits, "0")).join(sep);
  return { nbits, data: binary_string };
}

module.exports = binarize;
