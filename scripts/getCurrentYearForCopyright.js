const copyrightSign = document.createElement("p");
const year = new Date().getFullYear();
copyrightSign.innerHTML = "&copy; " + year + "<br> <span style='font-size: .6em; text-decoration: underline;'>privacy policy</span><br>"; // InnerHTML wordt gebruikt omdat het anders &copy; letterlijk uitprint
$('#copyright').append(copyrightSign);