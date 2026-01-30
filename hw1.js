// Homework 1: JavaScript Fundamentals
// Name: Miguel Ortega
// Date: 1/30/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr) {
  let sum = arr.reduce(function name(acc, curr) {
    return acc + curr;
  }, 0)
  return sum;
}

function average(arr) {
   return sum(arr) / arr.length;
}

function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
  let max = Number.MIN_VALUE;

  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
  // TODO: Return string with first letter capitalized
  // "hello" -> "Hello"
}

function reverse(str) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    newString += str.charAt(str.length - i - 1);
  }
  return newString;

  // cleaner way: return str.split("").reverse().join(""); One line!
  // What I did above is still correct but the cleaner way is the way to go!
}

function countVowels(str) {
  let count = 0;
  str.toLowerCase(); // handles situations where you have uppercase vowels

  for (let char of str) {
    if (
      char === "a" || // Note: I couldve also added the vowels in an array and use the includes() method.
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

// ============ PART 3: OBJECT ============
const student = {
  name: "Your Name",
  age: 20,
  grades: [85, 92, 78, 90, 88],

  getAverage: function () {
    // TODO: Return average of this.grades
  },

  isHonorRoll: function () {
    // TODO: Return true if average > 85
  },
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());
