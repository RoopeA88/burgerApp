const mainSection = document.createElement("section");
;
const body = document.body;
const topNavigationBar = document.createElement("div");

topNavigationBar.id="topNavigationBar";
topNavigationBar.style.height="175px";
topNavigationBar.style.width="700px";
topNavigationBar.style.backgroundColor="red";

const mealSpan = document.createElement("span");
mealSpan.innerText="Meals";
const hamburgerSpan = document.createElement("span");
hamburgerSpan.innerText="Hamburgers";
const drinkSpan = document.createElement("span");
drinkSpan.innerText="Drinks";
const sideSpan = document.createElement("span");
sideSpan.innerText="Sides";

body.style.height="100vh";
body.style.width="100vw";
body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.flexDirection="row";

mainSection.id="mainSection"
mainSection.style.backgroundColor="black";
mainSection.style.height="700px";
mainSection.style.width="700px";
mainSection.style.display = "flex";
mainSection.style.flexDirection="column";

body.appendChild(mainSection);
mainSection.appendChild(topNavigationBar);