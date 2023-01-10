// EXERCICE XP 1

//question 1: Add the code above, to your HTML file

let container = document.getElementById("container");
console.log(container);
// 2- Change the name “Pete” to “Richard”.

document.getElementsByTagName('li')[1].innerHTML="Richard";
// 3- Change each first name of the two <ul>'s to your name.

 let dox = document.querySelectorAll('ul > li:first-child');

 for(let doc of dox)
 {
    doc.innerHTML="raissa";
 }

// 4- Delete the <li> that contains the text node “Sarah”.

 let supprime = document.querySelectorAll('ul li:nth-child(2)');
 console.log(supprime[1].remove());

// EXERCICE XP 2

// 2-  Add a “light blue” background color and some padding to the <div>.
document.querySelector("div").style.backgroundColor = "lightblue";

// 3- Do not display the <li> that contains the text node “John”.
let cacher = document.getElementsByTagName('ul')[0];
console.log(cacher.firstElementChild.style.display='none');

// 4- Add a border to the <li> that contains the text node “Pete”.
console.log(cacher.lastElementChild.style.border="solid");

// 5- Change the font size of the whole body.
console.log(document.body.style.fontSize="25px");

 