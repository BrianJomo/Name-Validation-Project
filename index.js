let malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femalenames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let dayofweek =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


function calc() {

var DD = document.getElementById("Day").value;
var year = document.getElementById("Year").value;
var MM = document.getElementById("Month").value;
var male = document.getElementById("Man").checked;
var female = document.getElementById("Woman").checked;



/*Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
 where;
 CC - is the century digits. For example 1989 has CC = 19
 YY - is the Year digits (1989 has YY = 89)
 MM -  is the Month
 DD - is the Day of the month 
 mod - is the modulus function ( % )*/

 //use the syntax array.slice(start, end)-method that accepts two optional parameters

var YY = year.slice(0, 2);
var YY = year.slice(2, 4);
var CC = (YY - 1) / 100 + 1;
var output= parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
  alert("PLEASE INSERT A VALID MONTH");

} else if (DD < 1 || DD > 31) {
  alert("PLEASE INSERT A VALID DAY");
}

