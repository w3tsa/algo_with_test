function hammingWeight(n) {
  let count = 0;

  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }

  return count;
}

let int1 = parseInt('00000000000000000000000000001011', 2);
let int2 = parseInt('00000000000000000000000010000000', 2);

console.log(hammingWeight(int1));
console.log(hammingWeight(int2));
