const unbinarize = ({ data, nbits }) => {
    if (typeof data !== "string")
        throw new Error("[fast-bin] data must be a string of 1s and 0s");
    if (nbits === 0) throw new Error("[fast-bin] nbits cannot be zero");

    const result = [];
    for (let i = 0; i < data.length; i += nbits) {
        const str = data.substring(i, i + nbits);
        const num = parseInt(str, 2);
        result.push(num);
    }
    return result;
};

module.exports = unbinarize;
