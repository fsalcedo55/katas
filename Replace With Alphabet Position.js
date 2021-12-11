function alphabetPosition(text) {
  let textArray = [];
  for (let letter of text) {
    let lowercaseLetter = letter.toLowerCase();
    let letterPosition = lowercaseLetter.charCodeAt() - 96;
    if (letterPosition > 0 && letterPosition < 27) {
      textArray.push(letterPosition);
    }
  }
  return textArray.join(" ");
}
