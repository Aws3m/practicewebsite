const telefoonel = document.createElement("p");
telefoonel.classList.add("telefoon");
telefoonel.classList.add("clay-style");
telefoonel.innerText = "0000000000";
const icons = document.querySelector(".icons");
icons.parentNode.insertBefore(telefoonel, icons);