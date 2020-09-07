//Kalder funktion

var a = 100;
addVat(a);

/*Beregner beløb med moms på et modtaget beløb*/

function addVat(a){


var amountWOTax=a;
const taxOn = 1.25;
var amountWT = amountWOTax * taxOn;
return amountWT;


}

//Kalder funktion

var a = 100;
subVat(a);

/*Beregner beløb uden moms på et modtaget beløb*/

function subVat(a){

var amountWTax = a;
const taxOf = 0.80;
var amountWOT = amountWTax * taxOf;
return amountWOT;

}

// Kalder function


var a = 125;
calcVat(a)

/*Beregner moms af modtaget beløb*/

function calcVat(a) {

var amountWTax = a;
const taxCalc = 0.20;
var tax = amountWTax * taxCalc;
return tax;

}