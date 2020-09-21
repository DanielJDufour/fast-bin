const test = require("ava");
const binarize = require("./binarize");
const unbinarize = require("./unbinarize");

test("binarize binary string", (t) => {
    const input = [0, 1, 0, 1];
    const { data, nbits } = binarize({ data: input });
    t.is(data, "0101");
    t.is(nbits, 1);
});

test("binarize 2-bit numbers string", (t) => {
    const input = [0, 1, 2, 3];
    const { data, nbits } = binarize({ data: input });
    t.is(data, "00011011");
    t.is(nbits, 2);
});

test("binarize 8-bit array", (t) => {
    const input = [
        36,
        40,
        161,
        66,
        231,
        138,
        9,
        30,
        60,
        56,
        177,
        132,
        5,
        142,
        26,
        52,
        72,
        225,
        228,
        70,
        17,
        22,
        40,
        88,
        178,
        68,
        197,
        138,
        18,
        88,
        120,
        226,
        6,
        135,
        146,
        30,
    ];
    const { data, nbits } = binarize({ data: input });
    t.is(nbits, 8);
    t.is(new Set(data).size, 2);
});

test("binarize Uint8Array", (t) => {
    const input = Uint8Array.from([
        36,
        40,
        161,
        66,
        231,
        138,
        9,
        30,
        60,
        56,
        177,
        132,
        5,
        142,
        26,
        52,
        72,
        225,
        228,
        70,
        17,
        22,
        40,
        88,
        178,
        68,
        197,
        138,
        18,
        88,
        120,
        226,
        6,
        135,
        146,
        30,
    ]);
    const { data, nbits } = binarize({ data: input, debug: false });
    t.is(nbits, 8);
    t.is(new Set(data).size, 2);
});

test("force binarize 2-bit numbers string to 8-bits", (t) => {
    const input = [0, 1, 2, 3];
    const { data, nbits } = binarize({ data: input, nbits: 8, sep: " " });
    t.is(data, "00000000 00000001 00000010 00000011");
    t.is(nbits, 8);
});

test("unbinarize 1-bit string", (t) => {
    const data = "0101";
    const nbits = 1;
    const arr = unbinarize({ data, nbits });
    t.deepEqual(arr, [0, 1, 0, 1]);
});

test("unbinarize 2-bit string", (t) => {
    const data = "00011011";
    const nbits = 2;
    const arr = unbinarize({ data, nbits });
    t.deepEqual(arr, [0, 1, 2, 3]);
});

test("throw error when try to unbinarize with nbits 0", (t) => {
    let error;
    try {
        const data = "00011011";
        const nbits = 0;
        unbinarize({ data, nbits });
    } catch (e) {
        error = e;
    }
    t.is(error.message, "[fast-bin] nbits cannot be zero");
});
