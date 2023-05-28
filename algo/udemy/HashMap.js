/* 
HashTable implementation
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }

    return undefined;
  }

  values() {
    let valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArray;
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArray;
  }
}

let ht = new HashTable();
ht.set('red', '#fc0303');
ht.set('orange', '#fc8c03');
ht.set('yellow', '#fce303');
ht.set('green', '#4efc03');
ht.set('blue', '#035efc');
ht.set('purple', '#b603fc');
ht.set('violet', '#b603fc');
// console.log(ht.values());
// console.log(ht.keys());
// console.log(ht.get('red'));
// console.log(ht);

// ht.keys().forEach((key) => {
//   console.log(ht.get(key));
// });

// Time Complexity:
// Insert: O(1)
// Deletion: O(1)
// Access: O(1)
