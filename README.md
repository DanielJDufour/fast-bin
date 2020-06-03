# fast-bin
Quickly Convert an Array of Numbers into their Minimal Binary Representations

# install
```bash
npm install fast-bin
```

# usage
## binarize an array of numbers
```javascript
const input = [0, 1, 2, 3, 4];
const { data, nbits } = binarize(input);
// data is '000001010011100'
// nbits is 3
```

## unbinarize a string
```javascript
const data = '00011011';
const nbits = 2;
const arr = unbinarize({ data, nbits });
// arr is [0, 1, 2, 3]
```

# support
Post an issue at https://github.com/danieljdufour/fast-bin
