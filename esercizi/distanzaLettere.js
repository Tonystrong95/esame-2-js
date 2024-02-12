// 3) Dato un array di stringhe ognuna contenente una sola lettera ritornare un nuovo array che contenga la distanza tra lettere vicine.
// Ad esempio per ["a", "c", "f"] deve ritornare [2, 3] perche' la "a" dista 2 dalla "c", la "c" dista 3 dalla "f".
// Ad esempio per ["e", "o", "z"] deve ritornare [8, 8] perche' la "e" dista 8 dalla "o", la "o" dista 8 dalla "z".
// Punti extra per array tipo ["e", "o", "z", "f", "h"] che come vedete ricominciano daccapo.

let array = ["a", "c", "f", "f", "h"];

function distanza(arr) {
  let alfabeto = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    l: 10,
    m: 11,
    n: 12,
    o: 13,
    p: 14,
    q: 15,
    r: 16,
    s: 17,
    t: 18,
    u: 19,
    v: 20,
    z: 21,
  };
  let occDistanza = [];
  let distanza1 = Object.entries(alfabeto);
  let contatore = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < distanza1.length; j++) {
      if (arr[i] == distanza1[j][0]) {
        if (alfabeto[arr[i]] < alfabeto[arr[i + 1]]) {
          for (let z = alfabeto[arr[i]]; z < alfabeto[arr[i + 1]]; z++) {
            contatore++;
            if (z == alfabeto[arr[i + 1]] - 1) {
              occDistanza.push(contatore);
              contatore = 0;
            }
          }
        } else {
          for (let o = alfabeto[arr[i]]; o > alfabeto[arr[i + 1]]; o--) {
            contatore++;
            if (o == alfabeto[arr[i + 1]] + 1) {
              occDistanza.push(contatore);
              contatore = 0;
            }
          }
        }
      }
    }
  }
  return occDistanza;
}
console.log(distanza(array));
