// JavaScript Document


//1.) Using ol as your starting element, target the first li element 
let childNode = document.querySelector('li');
let parentNode = childNode.parentNode;
console.log(childNode, parentNode[0]);

//2.) using main as your starting element, what is the last child? console.log to check it out 
let para = document.querySelector('main');
let lastSibling = para.lastChild;
console.log(para, lastSibling);


//3.) using html as your starting element, what is the last Element child? Console.log to check it out. 
let newPara = document.querySelector('html');
let secondSibling = newPara.lastElementChild;
console.log(newPara, secondSibling);


//4.) using the second li element as your starting element, target the next li element and change the colour to purple. 
let finalPara = document.querySelector('li');
let thirdSibling = finalPara.nextElementSibling;
let purple = document.getElementById('li').style.color = "purple";