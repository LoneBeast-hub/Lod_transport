// variables
// direct message form variables
let clientName = document.querySelector("#name");
let clientEmail = document.querySelector("#email");
let clientPhone = document.querySelector("#phone");
let clientMsg = document.querySelector("#message");
let submitMsg = document.querySelector("#submitMsg");

// listeners
clientName.addEventListener("blur", validateMsg);
clientEmail.addEventListener("blur", validateMsg);
clientPhone.addEventListener("blur", validateMsg);
clientMsg.addEventListener("blur", validateMsg);
submitMsg.addEventListener("blur", sendMsg)

// functions
function validateMsg() {
    if(
        clientName.value !== "" && clientName.value.length !== 0 
        && clientEmail.value !== "" && clientEmail.value.length !== 0 
        && clientPhone.value !== "" && clientPhone.value.length !== 0 
        && clientMsg.value !== "" && clientMsg.value.length !== 0
    ) {
        if(clientEmail.value.indexOf("@") > 0) {
            sendMsg();
        }
    }
}

// send Msg() 
function sendMsg() {
    submitMsg.href = `https://wa.me/+234707112578?text=Good%20day%20I-transport%20you%20have%20a%20message%20from%20website%20with%20this%20data:%20Name:${clientName.value},%20Email:${clientEmail.value},%20Phone:${clientPhone.value},%20Message:${clientMsg.value}`
}