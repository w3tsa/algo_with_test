function romanToInt(str) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;
  for (let i = 0; i < str.length - 1; i++) {
    let current = obj[str[i]];
    let next = obj[str[i + 1]];
    console.log(current);

    if (current < next) {
      int += next - current;
      i++;
    } else {
      int += current;
    }
  }
  return int;
}
// console.log(romanToInt('III')); // 3
// console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
