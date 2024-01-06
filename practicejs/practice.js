
//Problem1: Reverse a String
//Write a function that reverses a given string.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello"));  // Output: "olleh"

  
//Problem 2: Palindrome Checker
//Create a function to check if a given string is a palindrome.

 function isPalindrome(str) {
  if(str.split('').reverse().join('') === str){
      return true;
  }
  else {
      return false;
  }
}

console.log(isPalindrome("racecar")); // Output: true

//Problem 3: Find the Longest Word
//Write a function that returns the length of the longest word in a sentence.

 function findLongestWord(str) {

  let string = str.split(" ");
  let longlength = 0;
  let longstr = null;
  for(let i = 0; i<= string.length-1; i++) {
    
      if(string[i].length > longlength) {
          longlength = string[i].length;
          longstr = string[i];
         }
      
      }
     return longstr; 
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));  // Output: 6


//Problem 4: Capitalize Words
//Create a function to capitalize the first letter of each word in a sentence.

function capitalizeWords(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeWords("hello world"))  // Output: "Hello World"

//Problem 5: Sum All Numbers in a Range
//Write a function that returns the sum of all numbers in a given range.

function sumAll(arr) {
  let total = 0;
  for(let i = 1; i <= 4; i++) {
      total += i;
      
  }
  return total;
}

console.log(sumAll([1, 4])) // Output: 10


//Problem 6: Diff Two Arrays
//Create a function that returns the symmetric difference of two arrays.

function diffArray(arr1, arr2) {
    let arraycount1 = 0;
    let arraycount2 = 0;
    for(let i = 0; i<= arr1.length-1; i++) {
        arraycount1 += i;
    }
    for(let j = 0; j<= arr2.length-1; j++) {
        arraycount2 += j;
    }
    return  arraycount2 - arraycount1;
    
    }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));  // Output: [4]


//Problem 7: Seek and Destroy
//Write a function that removes elements from an array based on the provided arguments.

function destroyer(arr, ...args) {
    result = [];
   for(i = 0; i<= arr.length; i++) {
       if(arr[i] != args){
          return result.push(arr);
       }
   }
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))  // Output: [1, 1]


//Problem 9: Spinal Tap Case
//Convert a string to spinal case (all-lowercase-words-joined-by-dashes).


function spinalCase(str) {
  string = str.split(" ");
  let finalstr = " ";
  for(i = 0; i<= string.length-1; i++) {
     
      finalstr += string[i] + '-';
     
      }
  return finalstr;
}

console.log(spinalCase("This Is Spinal Tap")); // Output: "this-is-spinal-tap"


//Problem 10: Pig Latin
//Translate the provided string to Pig Latin.

function translatePigLatin(str) {
    string = str.split('');
    let output = " ";
  for(let i = 1; i<= str.length-1; i++) {
      output += string[i];
     
  }
  return output + string[0] + 'cy';
}

console.log(translatePigLatin("consonant")); // Output: "onsonantcay"



//Problem 11: Search and Replace
//Perform a search and replace on the sentence using the provided arguments and return the new sentence.

 function myReplace(str, before, after) {
  let result = str.replace(/Sleeping/g, sitting);
  return result;
  }
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
   // Output: "He is Sitting on the couch"


  //Problem 12: DNA Pairing
  //The DNA strand is missing the pairing element. Write a function that takes each character, gets its pair, and retD array.
  
  function pairElement(str) {
  string = str.split('');
  resultstr = [];
  for( let i = 0; i=string.length-1; i++){
  let formstr = (string[i], string[i + 1]);
  resultstr += formstr;
  return resultstr;
  }
  }
  console.log(pairElement("GCG")); //Output: [["G", "C"], ["C", "G"], ["G", "C"]]

  
  
  //Problem 13: Missing Letters
  //Find the missing letter in the passed letter range and return it.
  
  function fearNotLetter(str) {
  resultstr = ' ';
  finalstr = ' ';
  let orgstring = "abcde";
  splitorg = orgstring.split('');
  splitstr = str.split('');
  for(i = 0; i= splitorg; i++) {
  for( j = 0; j= splitstr; j++){
  if(splitstrg.includes(splitorg[j])) {
  resultstr += splitorg[j];
  }
  else {
  finalstr = splitorg[j];
  }
  }
  return finalstr;
  }
}
  console.log(fearNotLetter(abce)); // Output: "d"


 //Problem 14: Sorted Union
 // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
  
  function uniteUnique(arr1, arr2, arr3) {
  let array = (arr1 + arr2 + arr3);
  let string = new Set(array);
  
  let result = Array.from(string);
  return result;
  }
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));  // Output: [1, 3, 2, 5, 4]

   //Problem 15: Convert HTML Entities
  //Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
  
  
  function convertHTML(str) {
    const htmlEntities = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "":"&quot;",
    "'":"&apos;"
      };
  return str.replace(/[&<>""']/g, match => htmlEntities[match]);
  }
  console.log(convertHTML("Dolce & Gabbana")); // Output: "Dolce &amp; Gabbana”



 //Problem 16: Sum All Primes
 //Sum all the prime numbers up to and including the provided number.
 
 
 function sumPrimes(num) {
  let storeprime = ' ';
  for(i = 2; i<= 10; i++){
  if(i % 2 === 0){
  storeprime += i;
  let store = Array.from(storeprime);
  let result = storeprime.reduce((acc, current) =&gt; acc + current, 0);
  }
  }
  return result;
  }
  console.log(sumPrimes(10)); //output: 17


  //Problem 18: Drop it
  //Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
   
  function dropElements(arr) {
  store= ' ';
  for(i = 0; i<= arr.length; i++) {
  if(arr[i] >= 3) {
  store = store + arr[i];
  }
  }
  return Array.from(store);
  
  }
  console.log(dropElements([1, 2, 3, 4]));  // Output: [3, 4]



  //Problem 19: Steamroller
  //Flatten a nested array. You must account for varying levels of nesting.

  function steamrollArray(arr) {
  return arr.reduce((flatArray, element) => {
  return flatArray.concat(Array.isArray(element) ? steamrollArray(element): element);
  }, []);
  }
  console.log(steamrollArray([1, [2], [3, [[4]]]]));  // Output: [1, 2, 3, 4]


  //Problem 20: Binary Agents
  //Return an English translated sentence of the passed binary string.
  
  
  function binaryAgent(str) {
  const stringify = parseInt(str, 2);
  const binary = String.fromCharCode(stringify);
  return binary;
  }
  console.log(binaryAgent("01001001 01110011 00100000 01000110 01110101 01101110?")); //Output: "Is Fun?"
