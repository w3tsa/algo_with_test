/* 
You are running a classroom and suspect that some of your students are passing
around the answer to a multiple-choice question disguised as a random note.

Your task is to write a function that, given a list of words and a note, finds
and returns the word in the list that is scrambled inside the note, if any
exists. If none exist, it returns the result "-" as a string. There will be at
most one matching word. The letters don't need to be in order or next to each
other. The letters cannot be reused.

Example:  
words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"] 
note1 = "ctay" find(words, note1) => "cat"   (the letters do not have to be in order)  

note2 = "bcanihjsrrrferet" find(words, note2) => "cat"   (the letters do not
have to be together)  

note3 = "tbaykkjlga" find(words, note3) => "-"     (the letters cannot be
reused)  

note4 = "bbbblkkjbaby" find(words, note4) => "baby"    

note5 = "dad" find(words, note5) => "-"    

note6 = "breadmaking" find(words, note6) => "bird"    

note7 = "dadaa" find(words, note7) => "dada"    

All Test Cases: find(words, note1) -> "cat" find(words, note2) -> "cat"
find(words, note3) -> "-" find(words, note4) -> "baby" find(words, note5) -> "-"
find(words, note6) -> "bird" find(words, note7) -> "dada"

Complexity analysis variables:  

W = number of words in `words`  
S = maximal length of each word or of the note  
*/

function find(words, string) {
  for (let i = 0; i < words.length; i++) {
    if (string.includes(words[i]) || isScrambled(words[i], string)) {
      return words[i];
    }
  }

  return '-';
}

function isScrambled(str1, str2) {
  let lookup = {};

  for (let i = 0; i < str2.length; i++) {
    let ltr = str2[i];
    lookup[ltr] ? (lookup[ltr] += 1) : (lookup[ltr] = 1);
  }

  for (let i = 0; i < str1.length; i++) {
    let ltr = str1[i];
    if (!lookup[ltr]) {
      return false;
    } else {
      lookup[ltr]--;
    }
  }

  for (let ltr of str2) {
    if (lookup[ltr] < 0) return false;
  }

  return true;
}

const words = ['baby', 'referee', 'cat', 'dada', 'dog', 'bird', 'ax', 'baz'];
const note1 = 'ctay';
// console.log(find(words, note1)); // "cat"   (the letters do not have to be in order)

const note2 = 'bcanihjsrrrferet';
// console.log(find(words, note2)); // "cat"   (the letters do not have to be together)

const note3 = 'tbaykkjlga';
// console.log(find(words, note3)); // "-"     (the letters cannot be reused)

const note4 = 'bbbblkkjbaby';
// console.log(find(words, note4)); // "baby"

const note5 = 'dad';
// console.log(find(words, note5)); // "-"

const note6 = 'breadmaking';
// console.log(find(words, note6)); // "bird"

const note7 = 'dadaa';
// console.log(find(words, note7)); // "dada"

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip('find', () => {
    it('should return the word match "cat"', () => {
      expect(find(words, note1)).toEqual('cat');
    });
    it('should return the word match "cat"', () => {
      expect(find(words, note2)).toEqual('cat');
    });
    it('should return the word match "-"', () => {
      expect(find(words, note3)).toEqual('-');
    });
    it('should return the word match "baby"', () => {
      expect(find(words, note4)).toEqual('baby');
    });
    it('should return the word match "-"', () => {
      expect(find(words, note5)).toEqual('-');
    });
    it('should return the word match "bird"', () => {
      expect(find(words, note6)).toEqual('bird');
    });
    it('should return the word match "dada"', () => {
      expect(find(words, note7)).toEqual('dada');
    });
  });
}
