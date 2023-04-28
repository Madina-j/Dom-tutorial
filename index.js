// getElementById()
// const title = document.getElementById("main-heading");
// console.log(title);
// getElementByClassName()
// const flexItem = document.getElementsByClassName("flex-item");
// console.log(flexItem);
// getElementsByTagName()

// querySelector( first element or whole class, element id)

// const container = document.querySelector("li");
// console.log(container);
const title1 = document.querySelector("#main-heading");

title1.style.color = "red"; // for in-line style

// querySelectorAll

const flexItem1 = document.querySelectorAll(".flex-item");

//flexItem1.style.color = "red"; // woudnt work, becous it not in-line, first need to loop each every item
// for (i = 0; i < flexItem1.length; i++) {
//   flexItem1[i].style.color = "red";
// }

// // ////Creating Elements
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// //Adding elements
// ul.append(li);

//Modifing the text
// const firstListItem = document.querySelector(".flex-item");
// console.log(firstListItem.innerText); //most use Neo
// //   1
// console.log(firstListItem.textContent); // Neo1
// console.log(firstListItem.innerHTML); // <span>Neo</span>
// //20 min

// ////////Modifing the text
// li.innerText = "X-men";

////// Modifying Attributes & Classes
//////
// li.classList.add("flex-item"); //- give li same atribute
/////////////////////////////
// li.classList.remove("flex-item");
// console.log(li.classList.contains("flex-item"));
//////////////////////////
// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");
// const title1 = document.querySelector("#main-heading");
// console.log(title1.getAttribute("id"));
///
///// Remove Elements
// li.remove();
/////////////////
////// Parent Node Traversal/////
// let ul = document.querySelector("ul");
// console.log(ul.parentNode);
// console.log(ul.parentNode.parentNode); // - nesting 2 level up
// console.log(ul.parentElement);
// const html = document.documentElement;
// console.log(html.parentNode); // - more use whrn traversal DOM
// console.log(html.parentElement); // -less use, console : null
//////////////////////
/////Child Node Traversal////////(31:19)
// let ul = document.querySelector("ul");
// console.log(ul.childNodes); - all elements-children include text
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.background = "blue"; - select one element (child)from ul

// console.log(ul.children); // - all items inside ul
// console.log(ul.firstElementChild); // - select first element ul
// console.log(ul.lastElementChild); // - select last element ul

/////////Sibling Node Traversal //// proprerty for nodes-covers all nodes, property for rlrmrnt covers element nodes
let ul = document.querySelector("ul");
const div = document.querySelector("div");
console.log(div.children);
console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling); // - null, because no sibling after ul
