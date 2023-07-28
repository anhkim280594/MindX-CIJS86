function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    let longestWordLength = 0;
    for (const word of words) {
        const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "");
        if (cleanedWord.length > longestWordLength) {
            longestWord = cleanedWord;
            longestWordLength = cleanedWord.length;
        }
    }
    return longestWord;
}
