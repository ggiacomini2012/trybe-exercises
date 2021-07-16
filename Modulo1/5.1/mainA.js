const paragraph = document.getElementById("paragraph");
paragraph.style.color = "blue";

paragraph.innerText = "Independance Day";
paragraph.style.backgroundColor = "black";

const paragraphTwo = document.querySelector("#second-paragraph");
paragraph.className = "classeIgual";
paragraphTwo.className = "classeIgual";

const recuperandoPorClassName = document.getElementsByClassName("classeIgual");

paragraph.style.textDecoration = "underline";

let subtitleByTagName = document.getElementsByTagName("h4");
let subtitleByTagNameTwo = document.getElementById("subtitle");

subtitleByTagNameTwo.style.color = "red";
subtitleByTagName[0].style.backgroundColor = "purple";