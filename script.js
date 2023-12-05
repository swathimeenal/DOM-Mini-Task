//!Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.

const element = document.querySelector("h1");
element.addEventListener("click",(ele)=>{
document.querySelector("h2").innerText=`Cordinates of X = ${ele.pageX} and Y = ${ele.pageY}`});

//!Write a Javascript code for character counts in the textarea.
const textarea = document.getElementById("textarea");
textarea.addEventListener("input",(element)=>{
    document.querySelector("span").innerText = `No of Characters in the textarea:${element.target.value.length}`;
});

  