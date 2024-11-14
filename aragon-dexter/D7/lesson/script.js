// Accessing elements by ID
const heading = document.getElementById('heading');
console.log(heading);

// Accessing elements using CLASS
const text = document.getElementsByClassName('text');
console.log(text);

// Accessing elements by Tag Name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Accessing elements by query selector
const heading2 = document.querySelector('#heading');
console.log(heading2);

// Accessing elements by query selector
const listItems = document.querySelectorAll('#list li');
console.log(listItems);

// Modifying element content using textContent
const firstParagraph = text[0];
firstParagraph.textContent = 'This is an updated paragraph'

// Modifying element attributes using setAttribute
const listItem = listItems[0];
listItem.setAttribute('class', 'highlight');

// Modifying element styles using style property
const button = document.querySelector('#btn');
button.style.backgroudColor = 'blue';

// Creating new elements dynamically
const newParagraph = document.createElement('p');
newParagraph.textContent = 'this is a new paragraph';
const container = document.querySelector('.container');
container.appendChild(newParagraph);

// Removing elements dynamically
const secondListItem = listItems[1];
secondListItem.remove();