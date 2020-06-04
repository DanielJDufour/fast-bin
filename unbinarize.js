const unbinarize = ({ data, nbits }) => {
  if (typeof data !== 'string') throw new Error('data must be a string of 1s and 0s');

  const result = [];
  for (let i = 0; i < data.length; i += nbits) {
    const str = data.substring(i, i + nbits);
    const num = parseInt(str, 2);
    result.push(num);
  }
  return result;
}

module.exports = unbinarize;
