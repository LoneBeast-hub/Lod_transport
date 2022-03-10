// variables
let calImg = document.querySelector(".calculate_img img");
let trackBtn = document.querySelector(".trackBtn");
let trackProductName = document.querySelector(".trackProductName");
// calculate cost variables
let packageHeight = document.querySelector("#height");
let packageWidth = document.querySelector("#width");
let packageWeight = document.querySelector("#weight");
let packageFrom = document.querySelector("#locationFrom");
let packageTo = document.querySelector("#locationTo");
let packageQuantity = document.querySelector("#quantity");
let packageType = document.querySelector("#package");
let submitOrder = document.querySelector("#submitOrder");
let msgOrder = document.querySelector("#msgOrder");

// listeners
// track product
trackBtn.addEventListener("click", trackProduct);
// calculate cost
packageHeight.addEventListener("blur", validateCost);
packageWidth.addEventListener("blur", validateCost);
packageWeight.addEventListener("blur", validateCost);
packageFrom.addEventListener("blur", validateCost);
packageTo.addEventListener("blur", validateCost);
packageType.addEventListener("blur", validateCost);
packageQuantity.addEventListener("blur", validateCost);

// functions
// init functions
function funcInit() {
    directMsg();
}

// time function to get the height of this img and set it to the height of its parent for proper postioning of elements
setInterval(() => {
    let calImgHeight = calImg.getBoundingClientRect().height;
    document.querySelector(".calculate_img").style.height = `${calImgHeight}px`;
}, 50);

// calculate cost
function validateCost() {
    if(packageHeight.value !== "" && packageHeight.value.length !== 0
     && packageWidth.value !== "" && packageWidth.value.length !== 0 
     && packageWeight.value !== "" && packageWeight.value.length !== 0 
     &&  packageFrom.value !== "" && packageFrom.value.length !== 0 
     && packageTo.value !== "" && packageTo.value.length !== 0 
     && packageQuantity.value !== "" && packageQuantity.value.length !== 0 
     && packageType.value !== "" && packageType.value.length !== 0) {
        // Submit cost
        submitOrder.href = `https://wa.me/+234707112578?text=*Delivery%20Order!!!*%20Delivery%20Informations:%20Height:${packageHeight.value}CM,%20Width:${packageWidth.value}CM,%20Weight:${packageWeight.value}KG,%20Location%20is%20*FROM*%20${packageFrom.value}%20*TO*%20${packageTo.value},%20Quantity%20to%20be%20delivered%20is:${packageQuantity.value}Units,%20The%20Package%20Type%20is${packageType.value}`;
    }
}

// direct message
function directMsg() {
    msgOrder.href = `https://wa.me/+234707112578?text=I%20want%20to%20place%20a%20delivery%20order!`;
}

// track product function
function trackProduct() {
    if(trackProductName.value !== " " && trackProductName.value.length !== 0) {
        trackBtn.href = `https://wa.me/+234707112578?text=A%20request%20to%20track%20a%20package%20by%20name:%20*${trackProductName.value}*`;
    }
}