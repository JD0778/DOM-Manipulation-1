document.getElementById("taskname1").innerHTML = "Complete the project documentation";
// what is the difference between document and document in DOM

// In the Document Object Model (DOM), "Document" refers to the interface that represents the entire HTML or XML document. It is the root node from which all other nodes (elements, text, comments, etc.) are derived. The "document" (with a lowercase 'd') is a global variable in JavaScript that provides access to the current document loaded in the browser. Essentially, "Document" is the type or class, while "document" is an instance of that class representing the actual content of the web page.

document.getElementById("compl1").innerHTML = "Remove";

//i declared a variable and added somthing to the console
let task=document.getElementById("taskname2").innerHTML;
console.log(task+" "+"is selected");
//I added functionalitu to tje remove button to cross out the task and change its color to red
document.getElementById("compl1").addEventListener("click", function () {
    document.getElementById("taskname2").style.textDecoration="line-through";
    document.getElementById("taskname1").style.color="red";
});

document.getElementById("compl2").addEventListener("click", function () {
    event.preventDefault();
    