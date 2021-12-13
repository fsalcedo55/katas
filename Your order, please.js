function order(words) {
  if (!words) return "";
  let result = "";
  let wordObject = {};
  words.split(" ").forEach((str) => {
    for (let char of str) {
      if (!isNaN(char)) {
        wordObject[char] = str;
      }
    }
  });

  const sortedByKey = Object.keys(wordObject)
    .sort()
    .reduce((acc, key) => {
      acc[key] = wordObject[key];
      return acc;
    }, {});

  for (const property in sortedByKey) {
    console.log(`${property}: ${sortedByKey[property]}`);
    result += sortedByKey[property];
    result += " ";
  }
  return result.trim();
}

order("hou4se a3 thi1s i2s");
