function fazzFood(harga, voucher, jarak, kenaPajak) {
  const potongan = hitungPotongan(harga, voucher);
  const ongkir = hitungOngkir(jarak);
  const pajak = hitungPajak(kenaPajak, harga);

  const subtotal = harga - potongan + ongkir + pajak;

  return console.log(
    `
    Harga: ${harga}
    Potongan: ${potongan}
    Biaya antar: ${ongkir}
    Pajak: ${pajak}
    ------------------------
    Subtotal: ${subtotal}
    `
  );
}

function hitungPotongan(harga, voucher) {
  const benefitVoucher =
    voucher === "FAZZFOOD50" && harga >= 50000
      ? { diskon: 0.5, batasMax: 50000 }
      : voucher === "DITRAKTIR60" && harga >= 25000
      ? { diskon: 0.6, batasMax: 30000 }
      : { diskon: 0 };

  const potongan = benefitVoucher.diskon * harga;

  return potongan >= benefitVoucher.batasMax
    ? benefitVoucher.batasMax
    : potongan;
}

function hitungOngkir(jarak) {
  const ongkirDasar = 5000;
  const ongkirPerKM = 3000;
  const jarakDasar = 2;

  return jarak > jarakDasar
    ? ongkirDasar + (jarak - jarakDasar) * ongkirPerKM
    : ongkirDasar;
}

function hitungPajak(kenaPajak, harga) {
  const tarifPajak = 0.05;

  return kenaPajak ? tarifPajak * harga : 0;
}

fazzFood(75000, "FAZZFOOD50", 5, true);
