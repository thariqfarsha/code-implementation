// DETEKSI PALINDROM

function cekPalindrom(text) {
  // Validasi tipe data input harus string
  if (typeof text !== "string") {
    return "Input yang dimasukkan bukan string, ubah input menjadi string!";
  }

  // Validasi input harus lebih dari 2 huruf
  if (text.length <= 2) {
    return "Teks harus lebih dari 2 huruf!";
  }

  let i = text.length - 1;
  let reversed = "";
  lowerCaseText = text.toLowerCase();

  while (i >= 0) {
    reversed = reversed + lowerCaseText[i];
    i--;
  }

  if (lowerCaseText === reversed) {
    return `"${text}" adalah palindrom! :D`;
  } else {
    return `"${text}" bukan palindrom :(`;
  }
}

console.log(cekPalindrom("kAsuR inI ruSAk"));
console.log(cekPalindrom("kAsuR inI baGuS"));
