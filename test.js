const test = require('ava');
const binarize = require('./binarize');
const unbinarize = require('./unbinarize');

test('binarize binary string', t => {
  const input = [0, 1, 0, 1];
  const { data, nbits } = binarize(input);
  t.is(data, '0101');
  t.is(nbits, 1);
});

test('binarize 2-bit numbers string', t => {
  const input = [0, 1, 2, 3];
  const { data, nbits } = binarize(input);
  t.is(data, '00011011');
  t.is(nbits, 2);
});

test('unbinarize 1-bit string', t => {
  const data = '0101';
  const nbits = 1;
  const arr = unbinarize({ data, nbits });
  t.deepEqual(arr, [0, 1, 0, 1]);
});

test('unbinarize 2-bit string', t => {
  const data = '00011011';
  const nbits = 2;
  const arr = unbinarize({ data, nbits });
  t.deepEqual(arr, [0, 1, 2, 3]);
});
