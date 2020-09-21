const max = require("fast-max");

const binarize = ({ data: nums, debug = false, nbits, sep = "" }) => {
    if (debug) console.log("[fast-bin.binarize] sep:", sep);
    if (debug)
        console.log(
            "[fast-bin.binarize] nums.slice(0, 10):",
            nums.slice(0, 10)
        );

    const count = nums.length;
    if (count === 0)
        throw new Error(
            "[fast-bin.binarize] You cannot pass in data value of an empty array"
        );

    if (nbits === undefined || nbits === null)
        nbits = max(nums).toString(2).length;
    if (debug) console.log("[fast-bin.binarize] nbits:", nbits);

    let binary_string = nums[0].toString(2).padStart(nbits, "0");
    for (let i = 1; i < count; i++) {
        binary_string += sep + nums[i].toString(2).padStart(nbits, "0");
    }

    if (debug)
        console.log(
            "[fast-bin.binarize] binary_string.substr(0, 100):",
            binary_string.substr(0, 100)
        );
    return { nbits, data: binary_string };
};

module.exports = binarize;
