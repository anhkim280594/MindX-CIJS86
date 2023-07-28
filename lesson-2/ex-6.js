function generateFibonacciSequence(terms) {
    if (terms <= 0) {
        return [];
    } else if (terms === 1) {
        return [0];
    } else if (terms === 2) {
        return [0, 1];
    }
    let fibonacciSeq = [0, 1];
    while (fibonacciSeq.length < terms) {
        const nextNum = fibonacciSeq[fibonacciSeq.length - 1] + fibonacciSeq[fibonacciSeq.length - 2];
        fibonacciSeq.push(nextNum);
    }
    return fibonacciSeq;
}