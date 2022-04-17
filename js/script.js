// Coded by Jéssica Lopes x21147477 - CA2 MARCH/2022

//Username alert
function ValidateUsername() {

    //console test to see if the function is working
    console.log("Validate user test");

    //Declare Variables

    let user = document.getElementById("username").value;
    let y = "";

    //process

    if (user === "") {
        y = "please input your username"
    }

    //output
    document.getElementById("usrmsg").innerHTML = y;

}

//Validate password

function ValidatePassword(){
    //console test to see if the function is working
    console.log("Validate Password Test")

    //declare variables
    let passwordChar = document.getElementById("password").value;
    let p = "";

    //process

    if (passwordChar < 9){
        p = "teste"
    }

    document.getElementById("passwordmsg").innerHTML = p;
}


//SuperSize Message

function MFamilyTicket() {

    //console test to see if the function is working
    console.log("size test");

    //declare variables

    let familytix = document.getElementById("dropdown").value;
    let x = "";


    //process
    if (familytix === "Family") {
        x = "This ticket is for 2 adults and 2 kids under 11 years."
    }

    //output
    document.getElementById("familymsg").innerHTML = x;
}


//Quantity Validation

function ValidateQtt (){
    const fieldQtt = document.getElementById("quantity").value;
    let qt = "";

    if (fieldQtt >= 1){

        qt = ""

    }

    document.getElementById("qttmsg").innerHTML = qt;

}

//Coupon Message

function Coupon(){
    //console test to see if the function is working
    console.log("coupon test");

    //declare variables

    let couponCode = document.getElementById("coupon").value;
    let c;

    //process

    if (couponCode === ""){
        c = "";
    }
    else if (couponCode === "MexTexGood"){
        c = "You got 10% of discount";
    } else {
        c = "that's an invalid coupon"}

    //output

    document.getElementById("couponmsg").innerHTML = c;

}

//Submit Validate the form

function ValidateForm(){

    //console validation
    console.log("validate test");

    //declare variables

    const fieldUser = document.getElementById("username").value;
    const fieldQtt = document.getElementById("quantity").value;
    const fieldPsw = document.getElementById("password").value;
    const fieldSize = document.getElementById("dropdown").value;
    const totalvalue = document.getElementById("totalcalculated").innerHTML;


    let d = "";
    let qt = "";
    let psw = "";
    let sz = "";

    //Process
    if(fieldUser === ""){
        d = "please input your username";
    }

    if (fieldQtt === "" || fieldQtt === 0){
        qt = "The quantity should be more than 1";

    }

    if (fieldPsw === ""){
        psw = "Please insert your password"
    }
    if (fieldSize === "none"){
        sz = "Please chose your ticket size"
    }

    else{
        alert("check your e-mail to see more details of the payment for your next adventure");
    }

    //output
    document.getElementById("usrmsg2").innerHTML = d;
    document.getElementById("qttmsg").innerHTML = qt;
    document.getElementById("passwordmsg").innerHTML = psw;
    document.getElementById("txmsg").innerHTML = sz;

}



//Calculations (Total and coupon)

function Calculation() {

    console.log("calculation test");

    let AdultPrice = 100.00;
    let KidsPrice = 50.00;
    let FamilyPrice = 370.50;
    let total = 0;
    let ChosenTicket = document.getElementById("dropdown").value;
    let quantity = document.getElementById("quantity").value;


    // Calculate price of the order

    if (ChosenTicket === "Adult") {
        total = (total + AdultPrice) * quantity;
    } else if (ChosenTicket === "Kids") {
        total = (total + KidsPrice) * quantity;
    }  else if (ChosenTicket === "Family") {
        total = (total + FamilyPrice) * quantity;
    } else {
        total = 0;
    }


    //Final output
    document.getElementById("totalcalculated").innerHTML = "&euro; " + total;

}


