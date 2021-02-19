// JavaScript Document


//1.) Add a new paragraph to the page
let p = document.querySelector('p');
let newP = document.createElement('p');
p.appendChild(newP);

newP.textContent = ('This is a new paragraph');

//2.) Remove the class attribute on the header element 
let attribute = document.querySelector('header');
attribute.setAttribute('class', 'coolcat')

let removalParent = document.querySelector('coolcat');
removalParent.removeAttribute('class')


//3.) Change the src attribute in the image element to 'cat2.jpg'
let image = document.querySelector('assets.cat1.jpg');
image.innerHTML = "assets/cat2.jpg";

//4.) Remove the footer element 
let foot = document.getElementsByTagName('footer');
let parent = document.querySelector('footer');
parent.removeChild(foot);

//5.) Add an h3 into the header 
let heading = document.querySelector('header');
let newHeading = document.createElement('header');
heading.appendChild(newHeading);

newHeading.textContent = ('This is a new heading 3');
