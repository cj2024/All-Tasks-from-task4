// Parent Element
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// Last Element Child
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = 'yellow';


// Last Child
console.log(itemList.lastChild);


// First Element Child
itemList.firstElementChild.textContent = 'Hello 1';

 
// First Child
console.log(itemList.firstChild);


// Next Sibling
console.log(itemList.nextSibling);


// Next Element Sibling
console.log(itemList.nextElementSibling);


// Previous Sibling
console.log(itemList.previousSibling);


// Previous Element Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'Red';


// Create Element 
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';

// Set Attribute
newDiv.setAttribute('title','Hello Div');

// Create Text Node
var newDivText = document.createTextNode('Hello World');

// Append Child
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

newDiv.style.fontSize = '30px';


// Adding 'Hello Word' before item-1
var firstItem = itemList.firstElementChild; 

var newLi = document.createElement('li'); 
newLi.className = 'list-group-item'; 

var newLiText = document.createTextNode('Hello Word');
newLi.appendChild(newLiText);


itemList.insertBefore(newLi, firstItem);