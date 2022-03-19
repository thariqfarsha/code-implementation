//  REVERSE WORDS

function reverseWords(sentence) {
  // Validasi tipe data input harus string
  if (typeof sentence !== "string") {
    return "Input bukan string, ganti input dengan string";
  }

  // Validasi input harus lebih dari 1 kata
  if (sentence.split(" ").length <= 1) {
    return "Masukkan lebih dari 1 kata";
  }

  const words = sentence.split(" ");
  let i = words.length - 1;
  let reversedWords = [];

  while (i >= 0) {
    reversedWords.push(words[i]);
    i--;
  }

  const reversedSentence = reversedWords.join(" ");
  return reversedSentence;
}

console.log(reverseWords("Saya suka Javascript"));
