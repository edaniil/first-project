function addNumbers() {
    var a = +(document.getElementById('firstInput').value);
    var b = +(document.getElementById('secondInput').value);
    var sum = a + b;
    document.getElementById('calcResult').innerHTML = sum;
}

var array = [];
var len = 0;

function arrAdd() {
    var s;

    if (document.getElementById('arrayInput').value === '') {
        document.getElementById('arrResult').innerHTML = 'Вы не ввели число.';
    } else {
        s = +(document.getElementById('arrayInput').value);
        array[array.length] = s;
        len++;
    }

    if (document.getElementById('arrayInput').value !== '') {
        document.getElementById('arrayInput').value = '';
    } //очистка инпута, если в нем присутствует непустое значение
}

function arrShow() {
    var result = 'Вы ввели числа ';

    for (var i = 0; i < array.length - 2; i++) {
        result = result + array[i] + ', ';
    }

    if (array.length > 1) {
    result = result + array[array.length - 2] + ' и ' + array[array.length - 1] + '.';
    } else if (array[0] == undefined) {
        result = 'Вы не ввели никаких чисел.';
    } else if (array.length == 1) {
        result = 'Вы ввели число ' + array[0] + '.';
    }

    document.getElementById('arrResult').innerHTML = result;
}