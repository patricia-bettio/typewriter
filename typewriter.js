/* "use strict";

window.addEventListener("DOMContentLoaded", init);
//define global variables/ testing
let element = document.querySelector(".typewritten");
console.log(element)
let sentence = document.querySelector(".typewritten").textContent;
console.log(sentence)
let counter = 0;
console.log(counter)
let getLetter = sentence[0];
console.log(getLetter)
let oneEach;

function init(){
//1- grab the text tag and NOT show it
element.textContent = "";
show();
}

function show(){
//show 1st letter, 2nd, 3rd....
console.log(sentence.substring(0, counter+1))
console.log(sentence.substring(0, counter+2))
console.log(sentence.substring(0, counter+3))
oneEach = sentence.substring(0, counter+1);
console.log(oneEach)
//oneEach = sentence.substring(0, counter); "eats" last letter- why?

//display letter by making the html tag VISIBLE again *order matters* if: oneEach = element.textContent *DOES not work;
element.textContent = oneEach;

// order? works both ++counter and counter++
//++ Increment: it adds 1 to the existing value
++counter;

//show next letters
//if the Sentence length is > than the counter, it loops and runs show() again
if (sentence.length> counter) {
//show()
//too fast, set tim
setTimeout(show, 150)
}
} */

"use strict";

window.addEventListener("DOMContentLoaded", start);

function start(){

const element = document.querySelector(".typewritten");
console.log(element)
typewriter(element, done);

}

function done(){
console.log("Done")
}

function typewriter(element, callback){ 
let sentence = document.querySelector(".typewritten").textContent;
console.log(sentence)
let counter = 0;
console.log(counter)
let getLetter = sentence[0];
console.log(getLetter)
displayAll();

function displayAll (){
//show 1st letter, 2nd, 3rd....
console.log(sentence.substring(0, counter+1))
console.log(sentence.substring(0, counter+2))
console.log(sentence.substring(0, counter+3))
let oneEach = sentence.substring(0, counter+1);
console.log(oneEach)
//hide the text first
element.textContent = "";
element.textContent = oneEach;
++counter;
if (sentence.length> counter) {
setTimeout(displayAll, 150)
} else {
callback();
}
}
}