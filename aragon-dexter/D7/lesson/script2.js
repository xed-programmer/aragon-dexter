// Accessing parent, child, and sibling elements using DON traversal methods
// Acces the parent element if a specific element
const container = document.getElementById('container');
console.log(container.parentNode);

// Access the child elements of a specifiv element
const paragraphs = container.children;
console.log(paragraphs);

// Access the first child element
const firstParagraph = container.firstElementChild;
console.log(firstParagraph);

// Access the next sibling element
const secondParagraph = firstParagraph.nextElementSibling;
console.log(secondParagraph);

// Navigating the DOM tree using properties like parentNode, children, and next sibling
console.log(secondParagraph.parentNode);

// Access the child element of a specific element using children property
const content = document.querySelector('.content');
const nestedParagraph = content.children[0];
console.log(nestedParagraph);

// Access the previous sibling element using previousSibling property
console.log(nestedParagraph.previousSibling); // Output: #text (line break)

// Access the next sibling element using nextSibling property
console.log(nestedParagraph.nextSibling); // Output: null