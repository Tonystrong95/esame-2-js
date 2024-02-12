// 1) Dato un array non vuoto riempito di soli numeri positivi, calcolare la frequenza massima con cui il numero piu' comune compare.
// Ad esempio per [1, 2, 1, 2, 3, 1] la frequenza massima e' 3 perche' 1 compare 3 volte.
// A parita' di frequenza scegliere l'ultimo.

let positivi = [1, 1, 1, 2, 3, 2, 3, 5, 5, 5];

function frequenza(arr) {
  let tieniconto = {};
  for (let i = 0; i < arr.length; i++) {
    if (tieniconto[arr[i]]) {
      tieniconto[arr[i]]++;
    } else {
      tieniconto[arr[i]] = 1;
    }
  }
  let contatore = 0;
  let occorrenze = Object.entries(tieniconto);
  for (let i = 0; i < occorrenze.length; i++) {
    if (occorrenze[i][1] >= contatore) {
      contatore = occorrenze[i][1];
    }
  }
  return contatore;
}
console.log(frequenza(positivi));
