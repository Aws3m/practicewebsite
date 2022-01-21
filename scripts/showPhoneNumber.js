const telefoonel = document.createElement("p.telefoon");
const telefoonnummer = telefoonel.textContent= "0000000000";
const calltextDiv = document.getElementsByClassName("calltext");
const icons = document.getElementsByClassName("icons");
calltextDiv.insertBefore(telefoonnummer, icons);