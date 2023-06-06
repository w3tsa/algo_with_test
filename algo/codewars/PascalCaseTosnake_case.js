function toUnderscore(string) {
  if (typeof string === 'number') return String(string);
  return string
    .match(/[A-Z0-9][a-z0-9]*/g)
    .join('_')
    .toLowerCase();
}

// function toUnderscore(string) {
//   if (typeof string === 'number') return String(string);
//   return string
//     .replace(/([A-Z])/g, '_$1')
//     .toLowerCase()
//     .slice(1);
// }

/* 
function toUnderscore(string) {
  if(typeof string === 'number') return String(string);
  let snake_case = string[0].toLowerCase() + '';
  for(let i = 1; i < string.length; i++) {
    if(string[i].match(/[A-Z]+/g)){
      snake_case += '_';
      snake_case += string[i].toLowerCase();
      continue;
    }
    snake_case += string[i];
  }
  return snake_case;
} */

console.log(toUnderscore('PascalCase'), 'pascal_case');
console.log(toUnderscore('TestController'), 'test_controller');
// console.log(toUnderscore('MoviesAndBooks'), 'movies_and_books');
console.log(toUnderscore('App7Test'), 'app7_test');
// console.log(toUnderscore(1), '1');
console.log(toUnderscore('1AbcDef'), '1_abc_def');
