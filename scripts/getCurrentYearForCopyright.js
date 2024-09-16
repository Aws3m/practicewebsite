const copyrightSign = document.createElement("p");
const year = new Date().getFullYear();
copyrightSign.innerHTML = "<div class='copyrightfooter playwrite-us-modern-700'>&copy; " + year + "<span style='font-size: .8em; text-decoration: underline;'>privacy policy</span></div>";
$('#copyright').append(copyrightSign);