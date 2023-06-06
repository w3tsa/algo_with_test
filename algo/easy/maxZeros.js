// function maxZeros(number) {
//     const str = number.toString();
//     let max = 0;
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === '0') {
//             count++;
//             max = Math.max(max, count);
//         } else{
//             count = 0;
//         }
//     }
//     return max;
// }

const z = (n) =>
  Math.max(
    ...n
      .toString()
      .match(/[0]+/g)
      .map((l) => l.length)
  );
// console.log(z(1002000)) // 3
// console.log(z(10002030000)) // 4
// console.log(z(10)) // 1
console.log(z(1002000034000)); // 1
