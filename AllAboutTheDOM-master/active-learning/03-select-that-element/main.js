// JavaScript Document

//1.)  find two different ways to target the first section element on the page. Use console.log to check. Put a comment with the word faster by the method that targets the element more quickly and efficently. 
let section = document.querySelector('section');
let section = document.getElementById('section');


//2.)  Target the footer element. Use console.log to check 
 let footer = document.querySelector('footer');
 console.log (footer);

//3.)  Target all elements with the class or orange and change the text in these elements orange 
let orange = document.getElementsByClassName('orange').style.color = "orange";


//4.) Target all section elements and console log 
let elements = document.querySelectorAll('html');
console.log(elements);


//5.) Find two ways to target the second section element 
let section2 = document.querySelectorAll('selector')[2];