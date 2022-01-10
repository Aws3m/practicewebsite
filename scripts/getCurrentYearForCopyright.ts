
let copyrightSign = document.createElement("p");
let date = new Date();
let year = date.getFullYear();
const copyrightDiv = copyrightSign.textContent = "Copyright &copy; " + year;
document.getElementById("copyright").append("copyrightDiv");