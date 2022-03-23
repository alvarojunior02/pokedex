export const FirstLetterToUpperCase = (name: string) => {
  let loweredText = name.toLowerCase();
  let words = loweredText.split(" ");
  for (let i = 0; i < words.length; i++) {
      var w = words[i]

      var firstLetter = w[0];
      w = firstLetter.toUpperCase() + w.slice(1);

      words[i] = w;
  }
  return words.join(" ");
}