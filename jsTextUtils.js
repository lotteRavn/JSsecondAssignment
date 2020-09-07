
var s = "Hello";
first(s);

/*returns first letter in a string*/

function first(s){

var inString = s;
letter = inString.charAt(0);
return letter;
}


var s = "Hello";
last(s);


/*returns last letter in a string*/
function last(s) {

return s.charAt(s.length-1);


}


var s = "Hello";
middle(s);

/*returns everything between first and last letter in a string*/
function middle(s){

var inString = s;
letter = inString.substring(1, inString.length -1);
return letter;


}