const mainSection = document.createElement("section");
const logoDiv = document.createElement("div");
logoDiv.id = "logoDiv";
const body = document.body;
const topNavigationBar = document.createElement("div");
const mealDiv = document.createElement("div");
mealDiv.id = "mealDiv";
const shoppingCart = document.createElement("div");
shoppingCart.id="shoppingCart";
topNavigationBar.id="topNavigationBar";
const WelcomeDiv = document.createElement("div");
WelcomeDiv.id = "WelcomeDiv";
const WelcomeTextDiv = document.createElement("div");
WelcomeTextDiv.id = "WelcomeTextDiv";
WelcomeDiv.appendChild(WelcomeTextDiv);
WelcomeTextDiv.innerText = "Welcome, valued customer, to the Best Burger delivery! Feel free to order anything from our delicious menu and our delivery personnel will have your order at your door in no time."

body.appendChild(logoDiv);
const ShoppingCartList = [];
const ShoppingCartSum = [];

const mealSpan = document.createElement("span");
mealSpan.className="navigationSpans";
mealSpan.innerText="Meals";

mealSpan.onclick = revealMeals;
const hamburgerSpan = document.createElement("span");
hamburgerSpan.className="navigationSpans";
hamburgerSpan.innerText="Hamburgers";
const drinkSpan = document.createElement("span");
drinkSpan.className="navigationSpans";
drinkSpan.innerText="Drinks";
const sideSpan = document.createElement("span");
sideSpan.className="navigationSpans";
sideSpan.innerText="Sides";

topNavigationBar.appendChild(mealSpan);
topNavigationBar.appendChild(hamburgerSpan);
topNavigationBar.appendChild(drinkSpan);
topNavigationBar.appendChild(sideSpan);


mainSection.id="mainSection"


body.appendChild(mainSection);
body.appendChild(shoppingCart);
mainSection.appendChild(logoDiv);
mainSection.appendChild(topNavigationBar);
mainSection.appendChild(WelcomeDiv);
mainSection.appendChild(mealDiv);


const meals = [{name: "Big Meal", price: 18.95},{name: "Cheesy One Meal",price: 13.99}, {name: "Double Stack Meal", price: 20.99}, {name: "Hot Burger Meal", price: 13.25},{name: "Crunchy Meal", price: 17.25},{name: "Beefy Bun Meal",price: 19.99},{name: "Classic Combo", price: 14.25},{name:"Grill Box", price: 26.99},{name: "Juicy Deal",price: 9.95},{name: "Snack Pack", price:11.85}]

meals.forEach(element => {
    const mealsMotherDiv = document.createElement("div");
    mealsMotherDiv.className="mealsMotherDiv";
    const removeSpace = element.name.replaceAll(" ","");
    mealsMotherDiv.id = removeSpace;
    for(let i = 0; i< 3; i++){
        const mealsChildDiv = document.createElement("div");
        
        if(i == 0){
            mealsChildDiv.innerText = element.name;
            mealsChildDiv.className="mealsChildDivName";
            mealsMotherDiv.appendChild(mealsChildDiv);
        } else if(i == 1){
            mealsChildDiv.innerText = "$"+element.price;
            mealsChildDiv.className = "mealsChildDivPrice";
            mealsMotherDiv.appendChild(mealsChildDiv);
        } else if(i == 2){
            const btn = document.createElement("button");
            btn.addEventListener("click", () =>{
                PushToList(element);
                ShoppingCartNumberOfItems.innerHTML = ShoppingCartList.length;
                console.log(ShoppingCartList);
                let Sum = 0;
                ShoppingCartList.forEach(element => {
                    Sum = Sum+element.price;
                    TotalSumNumber.innerHTML = "$"+Sum.toFixed(2);
                });
                
               
            });
            btn.innerText = "Add to the Basket";
            btn.className="addtoBasketButton";
            mealsChildDiv.className = "mealsChildDivBtn";
            mealsChildDiv.appendChild(btn);
            mealsMotherDiv.appendChild(mealsChildDiv);
        }
        
        
    }
   mealDiv.appendChild(mealsMotherDiv);
});
function revealMeals(){
    WelcomeDiv.style.display="none";
    mealDiv.style.display="flex";
    mealDiv.style.flexDirection="column";
    mealDiv.style.justifyContent="space-around";
    mealDiv.style.alignItems="center";
}
function hideAll(){
    mealDiv.style.display="none";
}

function PushToList(element){
    DeleteItems();
    
    ShoppingCartList.push(element);
    DisplayItems();
}






const ShoppingCartMiniViewDiv = document.createElement("div");
ShoppingCartMiniViewDiv.id = "ShoppingCartMiniViewDiv";
const TotalSum = document.createElement("div");
TotalSum.id = "TotalSum";

const TotalSumId = document.createElement("div");
TotalSumId.innerHTML="Total";
const TotalSumNumber = document.createElement("div");
TotalSumNumber.id = "TotalSumNumber";
TotalSumId.id = "TotalSumId";
TotalSum.appendChild(TotalSumNumber);
TotalSum.appendChild(TotalSumId);
TotalSumNumber.innerHTML="$0";
const ShoppingCartNumberOfItems = document.createElement("div");
ShoppingCartNumberOfItems.id = "ShoppingCartNumberOfItems"
const ShoppingCartTitle = document.createElement("div");
ShoppingCartTitle.id = "ShoppingCartTitle";
ShoppingCartTitle.innerText = "Shopping Cart";
ShoppingCartMiniViewDiv.appendChild(ShoppingCartNumberOfItems);

ShoppingCartMiniViewDiv.appendChild(ShoppingCartTitle);
const ArrowDiv = document.createElement("div");
const Arrow = document.createElement("div");
ArrowDiv.id = "ArrowDiv";
Arrow.id = "Arrow";

ArrowDiv.appendChild(Arrow);
shoppingCart.appendChild(ShoppingCartMiniViewDiv);
shoppingCart.appendChild(ArrowDiv);
shoppingCart.appendChild(TotalSum);
ShoppingCartNumberOfItems.innerHTML = ShoppingCartList.length;

let ShoppingCartIndex = 0;

Arrow.onclick = function () {
    if (ShoppingCartIndex == 0) {
        StretchShoppingCart();
    } else {
        MinimizeShoppingCart();
    }
};
let rotation = 0;

function StretchShoppingCart() {
    shoppingCart.style.height = "90vh";
    ShoppingCartIndex = 1;
    DisplayItems();
    rotation += 180;
    Arrow.style.transform = `rotate(${rotation}deg)`;
    
    
    
}

function MinimizeShoppingCart() {
    shoppingCart.style.height = "200px";
    ShoppingCartIndex = 0;
    rotation += 180;
    Arrow.style.transform = `rotate(${rotation}deg)`;
    DeleteItems();
    
    
}
function DisplayItems(){
    if(ShoppingCartIndex == 1){
        ShoppingCartList.forEach(element => {
            const ShoppingCartMotherDiv = document.createElement("div");
            ShoppingCartMotherDiv.className="ShoppingCartMotherDiv";
            for(let i = 0; i<3; i++){
                const ShoppingCartChildDiv = document.createElement("div");
                ShoppingCartChildDiv.className="ShoppingCartChildDiv";
                if(i == 0){
                    ShoppingCartChildDiv.innerHTML="Delete";
                    ShoppingCartMotherDiv.appendChild(ShoppingCartChildDiv);

                } else if(i == 1){
                    ShoppingCartChildDiv.innerHTML = element.price;
                    ShoppingCartMotherDiv.appendChild(ShoppingCartChildDiv);
                } else if(i == 2){
                    ShoppingCartChildDiv.innerHTML = element.name;
                    ShoppingCartMotherDiv.appendChild(ShoppingCartChildDiv);
                }
            }
            shoppingCart.appendChild(ShoppingCartMotherDiv);
        });
     
    }
 
}
 function DeleteItems(){ 
    const DeleteMotherDivs = shoppingCart.querySelectorAll(".ShoppingCartMotherDiv");
    DeleteMotherDivs.forEach(element => {
        element.remove();
    });
 }








