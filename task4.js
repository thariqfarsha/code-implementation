function divideAndSort(num) {
  return num
    .toString() // split hanya bisa untuk string dan array, input bertipe number
    .split("0") // karena sudah dalam string, separatornya "0", bukan 0, tipe data num jadi array
    .map((el) => el.split("").sort().join("")) // String kosong pada split untuk memisahkan setiap karakter
    .join(""); // String kosong pada join agar setiap karakter menyatu (default separatornya koma)
}

const result = divideAndSort(5956560159466056);
console.log(result);
