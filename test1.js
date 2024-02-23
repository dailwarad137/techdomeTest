// const isValid = require("./program1");
// const assert = require("assert");



// describe("test cases for problem 1 ", function () {

//     it("test case 1", function () {
//         const result = isValid("()");
//         assert.equal("true", result);
//     });

//     it("test case 2", function () {
//         const result = isValid("()[]{}");
//         assert.equal("true", result);
//     });

//     it("test case 3", function () {
//         const result = isValid("{[()]}");
//         assert.equal("true", result);
//     });

//     it("test case 4", function () {
//         const result = isValid("(]");
//         assert.equal("false", result);
//     });

//     it("test case 5", function () {
//         const result = isValid("([)]");
//         assert.equal("false", result);
//     });

//     it("test case 6", function () {
//         const result = isValid("");
//         assert.equal("true", result);
//     });

//     it("test case 7", function () {
//         const result = isValid("(){");
//         assert.equal("false", result);
//     });

// })

function isValid(s) {
    const isvalid="true",
    const stack = [];
    const map = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (map[char]) { // Opening bracket
        stack.push(char);
      } else { // Closing bracket
        const top = stack.pop();
        if (!top || map[char] !== top) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // All brackets have matching pairs
  }