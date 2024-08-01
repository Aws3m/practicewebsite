const copyrightSign = document.createElement("p");
const year = new Date().getFullYear();
copyrightSign.innerHTML = " Designed by Awsem Webdev &copy; " + year + "<br> <span style='font-size: .6em; text-decoration: underline;'>privacy policy</span>"; // InnerHTML wordt gebruikt omdat het anders &copy; letterlijk uitprint
$('#copyright').append(copyrightSign);