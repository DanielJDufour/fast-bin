# fast-bin
Quickly Convert an Array of Numbers into their Minimal Binary Representations

# install
```bash
npm install fast-bin
```

# usage
## binarize an array of numbers
```javascript
const binarize = require('fast-bin/binarize');

const input = [0, 1, 2, 3, 4];
const { data: output, nbits } = binarize({ data: input });
// output is '000001010011100'
// nbits is 3
```

## unbinarize a string
```javascript
const unbinarize = require('fast-bin/unbinarize');

const data = '00011011';
const nbits = 2;
const arr = unbinarize({ data, nbits });
// arr is [0, 1, 2, 3]
```

# support
Post an issue at https://github.com/danieljdufour/fast-bin
