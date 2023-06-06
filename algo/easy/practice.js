// function bouncingBall(h, bounce, window) {
//   console.log(bounce)
//   if(h < 0 || bounce < 0 || bounce >= 1 || window > h) return -1;
//   let height = h;
//   let count = 0;

//   while (height >= window) {
//     height *= bounce;
//     if (height > window) count += 2;
//     else if (height === window) count++;
//   }

//   return count;
// }

function bouncingBall(h, bounce, window) {
  let rebound = -1;
  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      rebound += 2;
      h *= bounce;
    }
  }

  return rebound;
}
// console.log('first')
// console.log(bouncingBall(3, 0.66, 1.5));
// console.log(bouncingBall(2, 0.5, 1));
