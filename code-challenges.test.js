// // ASSESSMENT 2: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { capitalize } = require("lodash")
const { string } = require("prop-types")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Add appropriate dependencies to the repository:
// // $ yarn add jest

// // Use test driven development to complete the following questions
// //  This provides actually kmowing for sure if the test would have failed without that code if the tests work the way they are expected which brings up the Red Green Refractor process of test-driven dev.
// // Run the file with the following command:
// // $ yarn jest

// // Reminder: The test will call your function

// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// // a) Create a test with expect statements for each of the variables provided.
// I want to create a function called divisible by three.
// This function is going to return a string that says "this number is divisible by three"

// var num1 = 15
// // Expected output: "15 is divisible by three"
// Create a function that divides 

describe("divisibleByThree", () => { // I am following the syntax which is creating a function called "divisibleByThree"
   var num1 = 15 // I want to create a variable that passes an arguement in my function
   var num2 = 0 // "" ""
   var num3 = -7// "" ""
   test("returns 'is divisible by three' if number is divisible by three", () => { // you can use "it" or "test" followed by () and a descriptive message pertained to your function
     expect(divisibleByThree(num1)).toEqual("15 is divisible by three") 
     expect(divisibleByThree(num2)).toEqual("0 is divisible by three") 
     expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three") 
      })
  })
  const divisibleByThree = (num1) => {
    // The number will check if it is divisible by three by using the modulo
    // and check that the remainder is zero
    // Case 1 - it IS divisible by 3
    if (num1 % 3 === 0) {
        // Return a string saying the number is divisible by 3
        return `${num1} is divisible by three`;
    // Case 2 - it is NOT divisible by 3
    } else if (num1 % 3 !== 0) {
        // Return a string saying the number is not divisible by 3
        return `${num1} is not divisible by three`;
    } else {
        return "Ops, something went wrong!!"
    }
}
// var num2 = 0
// // Expected output: "0 is divisible by three"

// var num3 = -7
// // Expected output: "-7 is not divisble by three.

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// using fdescribe() helped me focus on the describe-block without having to comment out all other describe-blocks. 
  fdescribe("capitalized", () => {
    let upperNouns1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"] // creating a varaible (noun1) that passes an argument in my function 
    let upperNouns2 = ["Temperature", "Database", "Chopsticks", "Mango","Deduction"] // Creating a varaible (noun2) that passes an argument in my function
    let lowerNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    let lowerNouns2 = ["temperature", "database", "chopsticks", "mango","deduction"]
    
    test ("returns array capitalized", () => { // the test method i implemented or nested within the describe block, describes what the function is doing. In this case its descrbing, returning all words capatilized.
    expect(capitalized(lowerNouns1)).toEqual(upperNouns1)
    expect(capitalized(lowerNouns2)).toEqual(upperNouns2)
       // $ yarn jest and recieved an error message and arrow where my rest failed. In this case it showed line 83. 
          
    
    })
        })

// // b) Create the function that makes the test pass.
//  Create a function that takes in an array of words
// The function reurns a new array consisting of each word capitalized. 

const capitalized = (array) => {
    // create a local variable that maps through the array
    let eachItem = array.map(value => { // 
        return value[0].toUpperCase() + value.substring(1) // 
  })
  return eachItem
}
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.
// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenge"
// // Expected output: 2

    describe ("firstIndex", () => { //Write a test function called firstIndex
    let vowelTester1 = "learn"       // 
    let vowelTester2 = "academy"
    let vowelTester3 = "challenge"
    let vowelone = 1
    let voweltwo = 0
    let vowelthree = 2
     test("returns a string that logs the index of the first vowel", () => {
         expect(firstIndex(vowelTester1)).toEqual(vowelone)
         expect(firstIndex(vowelTester2)).toEqual(voweltwo)
         expect(firstIndex(vowelTester3)).toEqual(vowelthree)


    
        })
    }
   //const firstVIndex = (string) => {  // using the built in method .split that will make a string into an array.
      // for (let i=0; 1<string.length; i++){
       //    if(string[i] === "a || string(i) === "e" || string(i) === "i || string (i) === "o ||
    //    } string(i) === "u") {
        //    return i 
    //    }
    // }
// }
   
    const firstVowel = (string) =>{
    let vowelsArray = string.split("").filter(value => {
        return value === "a" || value === "e" || value === "i" || value === "o" || value === "u"
     return string.indexOf(vowelsArray[0])
}
    }