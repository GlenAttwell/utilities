const calculateWindow = (word) => {
  const wordList = [];
  const splitWord = word.split('');
  let maxLength = 0;
  splitWord.forEach((c, index) => {
    if (!wordList.includes(c)) {
      wordList.push(c);
      maxLength++;
    } else {
      const newWord = splitWord.splice(index, splitWord.length).join('');
      if (newWord.length > splitWord.length) {
        maxLength = calculateWindow(newWord);
      }
    }
  });

  return maxLength;
};

module.exports = {
  calculateWindow
}
