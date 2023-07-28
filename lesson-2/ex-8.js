function swapKeysAndValues(input) {
    const swapped = {};
    for (const key in input) {
        swapped[input[key]] = key;
    }
    return swapped;
}

let input = {}

swapKeysAndValues(input)