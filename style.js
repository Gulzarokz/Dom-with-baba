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


// var element;
// element = document.getElementById("header");
// element = document.getElementById("menu");
// element = document.getElementById("footer");
// element = document.getElementById("sidebar");
// element = document.getElementsByClassName("list")[0];
// element = document.getElementsByClassName("list")[2];


// element = document.getElementsByTagName("ul")

// console.log(element);




// getAttributes by through DOM inner html and innertext

// var element;
// element = document.getElementById("header").innerText;
// element = document.getElementById("header").innerHTML;
// element = document.getElementById("content").innerHTML;
// element = document.getElementById("content").innerText;
// console.log(element);

//   get attributes 

// var element = document.getElementById("header").getAttribute("id");
// var element = document.getElementById("header").getAttribute("class");
// var element = document.getElementById("header").getAttribute("style");
// var element = document.getElementById("header").getAttribute("onClick");
//  console.log(element);
 

// get attributes nodes
// var element = document.getElementById("header").getAttributeNode("id");
// var element = document.getElementById("header").getAttributeNode("class");
// var element = document.getElementById("header").getAttributeNode("style").value;
// var element = document.getElementById("header").getAttributeNode("onClick").value;
// console.log(element);

// only used Attributes
// var element = document.getElementById("header").attributes;
// var element = document.getElementById("header").attributes[1].value;
// var element = document.getElementById("header").attributes[1].name;







//set Attributes



// var element = document.getElementById("header").innerText = "<h1>khan</h>";
// var element = document.getElementById("header").innerHTML = "khan";


// var element = document.getElementById("header").setAttribute("class", "Gul")
// var element = document.getElementById("header").getAttribute("class")

// var element = document.getElementById("header").setAttribute("style", "border: 10px dotted blue")
// var element = document.getElementById("header").getAttribute("class")
// console.log(element);


// remover Attibutes
// var element = document.getElementById("header").removeAttribute("style");
// var element = document.getElementById("header").removeAttribute("id");
// var element = document.getElementById("header").getAttribute("class")
// console.log(element);



// DOM querySelectors() & querySelectorsAll()

// var element = document.querySelector(".list")[0];
// var element = document.querySelectorAll(".content")[1].innerHTML;
// var element = document.querySelectorAll(".list")[0].innerText;
// var element = document.getElementsByClassName("list");


// var element = document.querySelectorAll("ul")[0].innerHTML;
var element = document.querySelectorAll("#header h1");
console.log(element);


