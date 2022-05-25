// Challenge 1 --> Reverse words
function reverseWords(sentence) {
  return sentence.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('alchemy rocks gold'));

// Challenge 2 --> to sentence case
function titleCase(sentence) {
  return sentence.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(titleCase('alchemy ROCKS goLD'));

//Challenge 3 --> oddish and evenish
function oddishOrEvenish(number) {
  return number.toString().split('').reduce((acc, num) => acc += Number(num), 0) % 2 ? 'oddish' : 'evenish';
}

console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));

// Challenge 4 --> at 
function at(arr, index) {
  return arr.length >= index ? index >= 0 ? arr[index] : arr[(arr.length + index)] : 'The index is past the array length';
}

console.log(at(['a', 'b', 'c', 'd', 'e'], 7));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));

// Challenge 5 --> FizzBuzz
function fizzBuzz(number) {
  const array = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i);
    }
  }
  return array;
}
console.log(fizzBuzz(16));

function anagrams(wordOne, wordTwo) {
  if (wordOne.length != wordTwo.length) { return false; }
  const dictOne = wordOne.toLowerCase().split('').sort();
  const dictTwo = wordTwo.toLowerCase().split('').sort();
  for (let i = 0; i < wordOne.length; i++) {
    if (dictOne[i] !== dictTwo[i]) return false;
  }
  return true;
};

// console.log(anagrams('pictorialness', 'documentarily'));

// function isHappy(n) {
//   const runNums = (number) => {
//     console.log(number);
//     const splitN = number.toString().split('');
//     console.log('splitN', splitN);
//     currentNum = splitN.reduce((acc, num) => acc += (Number(num) * Number(num)), 0);
//     console.log('currentNum', currentNum);
//     console.log(typeof currentNum);
//     counter++;
//     console.log('counter', counter);
//     if (currentNum === 1) {
//       console.log('currentNum=1', currentNum);
//       return true;
//     } else {
//       return currentNum;
//     }
//   };
//   let currentNum = n;
//   let counter = 0;
//   runNums(n);
//   if (currentNum === 1) { return true; }
//   do {
//     if (counter > 0 && currentNum === n) {
//       console.log('currentNum', currentNum);
//       return false;
//     }
//     else {
//       console.log('currentNum', currentNum);
//       runNums(currentNum);
//     }

//   } while (currentNum != 1);
//   return true;
// }

function isHappy(n) {
  const runNums = (number) => {
    const splitN = number.toString().split('');
    currentNum = splitN.reduce((acc, num) => acc += (Number(num) * Number(num)), 0);
    counter++;
    if (currentNum === 1) {
      return true;
    } else {
      return currentNum;
    }
  };
  let currentNum = n;
  let counter = 0;
  runNums(n);
  if (currentNum === 1) { return true; }
  do {
    if (counter > 0 && currentNum === n) {
      return false;
    }
    else {
      runNums(currentNum);
    }

  } while (currentNum != 1);
  return true;
}

console.log(isHappy(19));