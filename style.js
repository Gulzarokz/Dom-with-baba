// var element;
// element = document.all[8]; target document object by index
// element = document.title;
// element = document.body;
// element = document.links;
// element = document.links[1];
// element = document.images[0];
// element = document.URL;
// element = document.domain;
// element = document.baseURI;
// console.log(element);

// var element;
// var element = document.getElementById("header");
// element = document.getElementById("menu");
// element = document.getElementById("footer");
// element = document.getElementById("sidebar");
// element = document.getElementsByClassName("list")[1];
// element = document.getElementsByClassName("list")[2];
//  console.log(element);
 
// var element;
// element = document.getElementsByTagName("ul")[2].innerText;

// console.log(element);




// getAttributes by through DOM inner html and innertext

// var element;
// element = document.getElementById("header").innerText;
// element = document.getElementById("header").innerHTML;
// element = document.getElementById("content")[0].innerHTML;
// element = document.getElementById("content").innerText;
// console.log(element);

//   get attributes 

// var element;
//  element = document.getElementById("header").getAttribute("id");
//  element = document.getElementById("header").getAttribute("class");
//  element = document.getElementById("header").getAttribute("style");
//  element = document.getElementById("header").getAttribute("onClick");
//     console.log(element);
 

// get attributes nodes

// var element = document.getElementById("header").getAttributeNode("id");
// var element = document.getElementById("header").getAttributeNode("class");
// var element = document.getElementById("header").getAttributeNode("style").value;
// var element = document.getElementById("header").getAttributeNode("onClick").value;
// console.log(element);

// only used Attributes

// var element = document.getElementById("header").attributes;
// var element = document.getElementById("header").attributes[1].value;
// var element = document.getElementById("header").attributes[0].value;
// var element = document.getElementById("header").attributes[2].value;
// var element = document.getElementById("header").attributes[3].value;
// var element = document.getElementById("header").attributes[0].name;
// var element = document.getElementById("header").attributes[1].name;

//  console.log(element);
 





//set Attributes



// var element = document.getElementById("header").innerText = "<h1>khan</h>";
// var element = document.getElementById("header").innerHTML = "khan";


// var element = document.getElementById("header").setAttribute("class", "mno")
// var element = document.getElementById("header").getAttribute("class")

// var element = document.getElementById("header").setAttribute("style", "border: 10px solid black")
// var element = document.getElementById("header").getAttribute("style");

// var element = document.getElementById("header").setAttribute("onClick", "qwerty")
// var element = document.getElementById("header").getAttribute("onclick");

// console.log(element);
// console.log(element);


// remover Attibutes
// var element = document.getElementById("header").removeAttribute("style");
// var element = document.getElementById("header").removeAttribute("id");
// var element = document.getElementById("header").getAttribute("class")
// console.log(element);



// DOM querySelectors() & querySelectorsAll()

// var element = document.querySelector("#header")[1];
// var element = document.querySelectorAll(".content")[1].innerHTML;
// var element = document.querySelectorAll(".list")[1].innerText;
// var element = document.querySelectorAll(".list")[1].innerHTML;
// var element = document.getElementsByClassName("list");
// console.log(element);

// var element = document.querySelectorAll("ul")[0].innerHTML;
// var element = document.querySelectorAll("ul")[0].innerText;
// var element = document.querySelectorAll("#header h1")[1];
// console.log(element);


// var element = document.querySelectorAll("#header");
// var element = document.querySelector("#header").getAttribute("style");
// var element = document.querySelector("#header").getAttribute("onClick");
// var element = document.querySelector("#header").setAttribute("class", "mno");
// var element = document.querySelector("#header").getAttribute("class");
// console.log(element);


// var element = document.querySelector(".list");

// console.log(element);


// Through query selector we can get and set values

// var element = document.querySelectorAll(".list")[1].innerHTML;
// var element = document.querySelectorAll("ul")[0].innerHTML;
// var element = document.querySelectorAll("ul")[1].innerHTML;
// var element = document.querySelectorAll("ul")[1].innerText;


// var element = document.querySelectorAll("#header h1")[2].innerHTML;

// console.log(element);


//set css style through javaScripts
// style className classList we can set and get

// var element = document.querySelector("#header").style.border;
// var element = document.querySelector("#header").style.backgroundColor = "lightblue";  it color the bgcolor 
// var element = document.querySelector("#header").style.color = "blue";  it color the text of the header

// by className methods

// var element = document.querySelector("#header").className = "abc xyz";
// var element = document.querySelector("#header").className;
// console.log(element);

// classList

// // var element = document.querySelector("#header").classList.add("xyz" , "efg");
// var element = document.querySelector("#header").classList.remove("xyz" , "efg");
// var element = document.querySelector("#header").classList;
// console.log(element);


// addEventListener methods
// var element = document.getElementById("header").onclick = abc;
// var element = document.getElementById("header").onmouseenter = abc;
// var element = document.getElementById("header").addEventListener("click", abc);
// var element = document.getElementById("header").addEventListener("click", abc);
// var element = document.getElementById("header").addEventListener("click", function(){
    // document.getElementById("header").style.border = "10px dashed blue";
//     this.style.border = "10px dashed blue";
// });

// function abc(){
//     document.getElementById("header").style.backgroundColor = "black"
// }


// document.querySelector("#outer").addEventListener('click', outer)
// document.querySelector("#inner").addEventListener('click', inner )

//     function outer() {
//         alert("outer dive");
//     }

//     function inner() {
//         alert("outer dive");
//     }


//classList methods 
// var element = document.getElementById("#header").addEventListener("click", abc);


// function abc(){
//     document.getElementById("#header").classList.add("xyz");
// }

// Dom Traversal methods

// var a = document.getElementById("inner").parentElement;
// var a = document.getElementById("outer").parentElement;
// var a = document.getElementById("inner").parentElement.style.background = "red";
// var a = document.getElementById("c").parentElement.style.background = "red";
// var a = document.getElementById("c").parentElement;
// var a = document.getElementById("head").parentNode;
// console.log(a);

// child childernNodes

// var a = document.getElementById("outer").childern;
// console.log(a);

// var a = document.getElementById("inner-items").children;
// var a = document.getElementById("inner").children[1].style.background = "red";
// var a = document.getElementById("inner").children[1];
// var a = document.getElementById("inner").children[1].style.background = "Yellow";
// var a = document.getElementById("inner").children[1];


var a = document.getElementById("inner").childNodes[0].innerHtml;
console.log(a);
