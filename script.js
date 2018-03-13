
var age = prompt("Quanti anni hai?");
document.getElementById('age').innerHTML = age;

var distance = prompt("Quanti km devi percorrere?");
document.getElementById('distance').innerHTML = distance;

var price = 0.21 * distance;

if ( (age < 18) ) {
   price = ( price - (price*20/100) );
} else if ( age > 65 ) {
   price = ( price - (price*40/100) );
}

document.getElementById('price').innerHTML = price;
