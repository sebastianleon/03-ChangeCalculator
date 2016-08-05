$("#button").click(function(){


var payment= $("#payment").val();
var sale= $("#sale").val();
var change = payment - sale;
console.log(change);
$("#Dollars").html('You have $' + Math.floor(change) + ' dollars left!');
var remainder1 = change-Math.floor(change);
Math.abs(remainder1);
var num = remainder1;
var positiveremain = num.toFixed(2);
var newnumber= positiveremain * 100;
Math.ceil(newnumber);
console.log(newnumber);
var quarters=newnumber/25;
var newquarters=Math.floor(quarters);

$("#Quarters").html('You have ' + newquarters + ' quarter(s) left!');

var quartersvsdimes= newquarters * 25;
var newremainder=newnumber-quartersvsdimes;


var dimes=Math.ceil(newremainder)/10;
var newDimes=Math.floor(dimes);

$("#Dimes").html('You have ' + newDimes + ' dime(s) left!');

var dimesvsnickels= newDimes * 10;
var newerRemainder= newremainder - dimesvsnickels;

var nickels= newerRemainder/5;
var newNickels=Math.floor(nickels);

$("#Nickels").html('You have ' + newNickels + ' nickel(s) left!');

var nickelsvsdimes= newNickels*5;
var tertiaryRemainder= newerRemainder-nickelsvsdimes;

var penny= tertiaryRemainder/1;
var newPenny=Math.floor(penny);

$("#Pennies").html('You have ' + newPenny + ' pennie(s) left!');

});


