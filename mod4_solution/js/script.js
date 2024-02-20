// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  // See Lecture 50, part 1
  console.log("---First List Print---")
  for (var name in names) {

    // STEP 11:
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    var firstLetter = names[name].charAt(0).toLowerCase();

    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter === "j") {
      byeSpeaker.speak(names[name])
    } else {
      helloSpeaker.speak(names[name])
    }
  }

  // ---STEP 2 JHU SPECIFIC---
  console.log("---Second List Print---")
  // Custom Map Function
  function customMapFunction(value, index, array) {
    var firstLetter = value.charAt(0).toLowerCase();
    if (firstLetter === "j") {
      return byeSpeaker.speakSimple(value);
    } else {
      return helloSpeaker.speakSimple(value);
    }
  }
  var greetings = names.map(customMapFunction);

  // Output STEP 2
  for (var greeting in greetings){
    console.log(greetings[greeting]);
  }

  // ---STEP 3 JHU SPECIFIC (BONUS)---
  console.log("---Third List Print---")
  // Reduce and set intitial accumulator value to {hello: [], bye []}
  var splitGreetingsLists = names.reduce(function(accumulator, name){
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === "j") {
      accumulator.bye.push(byeSpeaker.speakSimple(name));
    } else {
      accumulator.hello.push(helloSpeaker.speakSimple(name));
    }
    return accumulator;
  }, {hello: [], bye: []});

  // Output STEP 3
  console.log("---Hello Greetings---")
  for (var helloGreeting in splitGreetingsLists.hello){
    console.log(splitGreetingsLists.hello[helloGreeting]);
  }
  console.log("---Bye Greetings---")
  for (var byeGreeting in splitGreetingsLists.bye){
    console.log(splitGreetingsLists.bye[byeGreeting]);
  }
})();
