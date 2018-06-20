/*function isInteger(num) {
    return num === (num^0);
}
alert(isInteger(x));
alert(isInteger(n));

if(isInteger(n) == true)
{
    alert("Совпадает");
}
else {
    alert("не, хуня")
}*/
/*let n = Math.pow(2, 31);
m = n.toString(2);
alert(m);
n0 = n^0;
s = n0.toString(2);
alert(s);*/
/*result = prompt("Дима пидр?", "да");
alert(result);*/
/*let isAdmin = confirm("Вы - пидр?");
isAdmin == true ? alert("Вы - пидр!"):alert("Вы грязный натурал");*/
/*var age = prompt("Ваш возраст?",'');
age > 20 && age < 25 ? alert("21-24"):(age >= 25) ? alert("25+"):alert("20-");*/
/*var ask = prompt("чясло",'');
if (ask > 0) {
    alert("1");
} else if (ask < 0){
    alert("-1");
} else if (ask == 0){
    alert("0");
} else {
    alert("Это не число");
}*/
/*var login = prompt("Введите логин:",'');

if (login == "admin") {

    var password = prompt("Введите пароль:",'');

    if (password == "12345") {
        alert("Добро пожаловать!");
    } else if (password == null) {
        alert("Вход отменен");
    } else if (password != "12345") {
        alert("Пароль неверен");
    }
}
else if (login == null) {
    alert("Вход отменен");
}
else {
    alert("Пользователь не найден в БД");
}*/
/*var a = prompt('a','');
var b = prompt('b','');
a = +a;
b = +b;
result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);*/
/*var message;

if (login == 'Вася') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}*/
/*var login = prompt("login",'');

var message = (login == "Вася") ? 'Привет':
    (login == 'Директор')?'Здравствуйте':
        (login == '')? 'Нет логина':
            '';
alert(message);*/
//|| запинается на «правде»,
// && запинается на «лжи».
/*alert( alert(5) || 2 || alert(3) ); //5, 2
alert( alert(1) && alert(2) ); // 1, undefined*/
/*age = 10;
if (!(age >= 14 && age <= 90)) {
    alert("correct");
} else alert(1);*/
/*if (-1 || 0) alert( 'первое' ); //выполнится с -1
if (-1 && 0) alert( 'второе' ); // не выполнится с 0
if (null || -1 && 1) alert( 'третье' ); //выполнится с 1*/
/*alert(!!"0"); // true
alert(!!" "); // true*/
// простое число, мой вариант
// for (var length = 2; length <= 10; length++) {
//     for (var m = 2; m <= length; m++) {
//         if (length%m == 0) {break;}
//         else if (length%m > 0) {
//             if (m <= length)
//                 alert(length);
//             break;
//         }
//     }
// }
// простое число, нормальный вариант:
// nextPrime:
//     for (var length = 2; length <= 10; length++) {
//
//         for (var j = 2; j < length; j++) {
//             if (length % j == 0) continue nextPrime;
//         }
//
//         alert( length ); // простое
//     }
// var a = 1;
// var b = 1;
// var c = 1;
//
// function calcD(a, b, c) {
//     return a + b + c;
// }
//
// var test = calcD(9, 5, 8);
// alert(test);
// var teste = a + b + c;
// alert(teste);
// function pow(x,n) {
//     var firstX = x;
//     for (length = 1; length < n; length++) {
//         x = x*firstX;
//     }
//     return(x);
// }
//
// var x = +prompt('x?',);
// var n = +prompt('n?',);
// alert(pow(x,n));
// function sayHi() {   // (1)
//     alert( "Привет" );
// }
//
// var func = sayHi();    // (2)
// alert(func); // Привет    // (3)
//
// sayHi = null;
// sayHi();             // ошибка (4)
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );