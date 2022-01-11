const copyrightSign = document.createElement("p");
const year = new Date().getFullYear();
copyrightSign.innerHTML = "Copyright &copy; " + year; // InnerHTML wordt gebruikt omdat het anders &copy; letterlijk uitprint
document.getElementById("copyright").appendChild(copyrightSign);