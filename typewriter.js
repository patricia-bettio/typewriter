"use strict";

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
}