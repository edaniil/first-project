'use strict';
if (+localStorage.getItem('savedQuantity') == undefined) {
    var quantity = 0;
} else {var quantity = +localStorage.getItem('savedQuantity')}

if (+localStorage.getItem('pivoAmount') == undefined) {
    var pivoAmount = 0;
} else {var pivoAmount = +localStorage.getItem('pivoAmount')}

if (+localStorage.getItem('storyAmount') == undefined) {
    var storyAmount = 0;
} else {var storyAmount = +localStorage.getItem('storyAmount')}
document.getElementById('respectsCount').innerHTML = quantity;
document.getElementById('pivoAmount').innerHTML = pivoAmount;
document.getElementById('storyAmount').innerHTML = storyAmount;

var multiplier = 1;
var incrementer = document.getElementById('kostyan');

incrementer.onclick = function () {
    quantity += multiplier;
    document.getElementById('respectsCount').innerHTML = quantity;
    localStorage.setItem('savedQuantity', quantity);
};

document.getElementById('god').onmousedown = function () {
    this.classList.add('kc-scale');
};
document.onmouseup = function () {
    document.getElementById('god').classList.remove('kc-scale'); //уменьшение Костяна при клике
};

var god = document.getElementById('god'); //отключение переноса лица мышью
god.ondragstart = function() {
    return false;
};

var pivoPrice = 15, storyPrice = 100;

var pivoMultiplier = 1, storyMultiplier = 10;

if (+localStorage.getItem('pivoPrice') > 15) {
    pivoPrice = +localStorage.getItem('pivoPrice');   //сохранение изначальной цены здания
}
document.getElementById('pivoGives').innerHTML = pivoMultiplier;

if (+localStorage.getItem('storyPrice') > 100) {
    storyPrice = +localStorage.getItem('storyPrice');
}
document.getElementById('storyGives').innerHTML = storyMultiplier;

var pivoPriceMultiplier = 1, storyPriceMultiplier = 1;
if (+localStorage.getItem('pivoPriceMultiplier') > 1) {
    pivoPriceMultiplier = +localStorage.getItem('pivoPriceMultiplier')
}
if (localStorage.getItem('storyPriceMultiplier') > 1) {
    storyPriceMultiplier = +localStorage.getItem('storyPriceMultiplier')
}
//место для множителей цен следующих зданий

document.getElementById('pivoPrice').innerHTML = pivoPrice;
document.getElementById('storyPrice').innerHTML = storyPrice;
//место для показа начальной цены зданий

function addPivo() {
    if (quantity >= pivoPrice) {
    quantity -= pivoPrice;
    pivoPriceMultiplier += 0.1;
    pivoPrice = Math.round(pivoPrice * pivoPriceMultiplier);
    pivoAmount++;
    document.getElementById('pivoGives').innerHTML = pivoMultiplier;
    document.getElementById('respectsCount').innerHTML = quantity;
    document.getElementById('pivoAmount').innerHTML = pivoAmount;
    document.getElementById('pivoPrice').innerHTML = pivoPrice;
    localStorage.setItem('savedQuantity', quantity);
    localStorage.setItem('pivoAmount', pivoAmount);
    localStorage.setItem('pivoPrice', pivoPrice);
    localStorage.setItem('pivoPriceMultiplier', pivoPriceMultiplier);
    }
}

function addStory() {
    if (quantity >= storyPrice) {
        quantity -= storyPrice;
        storyPriceMultiplier += 0.1;
        storyPrice = Math.round(storyPrice * storyPriceMultiplier);
        storyAmount++;
        document.getElementById('storyGives').innerHTML = storyMultiplier;
        document.getElementById('respectsCount').innerHTML = quantity;
        document.getElementById('storyAmount').innerHTML = storyAmount;
        document.getElementById('storyPrice').innerHTML = storyPrice;
        localStorage.setItem('savedQuantity', quantity);
        localStorage.setItem('storyAmount', storyAmount);
        localStorage.setItem('storyPrice', storyPrice);
        localStorage.setItem('storyPriceMultiplier', storyPriceMultiplier);

    }
}

// var rps = 0;
// rps += pivoAmount * pivoGive;

setInterval(function pivoGive() {
    if (pivoAmount >= 1) {
        quantity += (pivoAmount*pivoMultiplier);
        localStorage.setItem('savedQuantity', quantity);
        document.getElementById('respectsCount').innerHTML = quantity;
    }
}, 1000);

// function timer() {
//     if (pivoAmount > 0) {
//         quantity += (pivoAmount*pivoMultiplier);
//         localStorage.setItem('savedQuantity', quantity);
//         document.getElementById('respectsCount').innerHTML = quantity;
//     }
// }


// var pivoGive = function() {
//     if (pivoAmount >= 1) {
//         quantity++;
//         localStorage.setItem('savedQuantity', quantity);
//         document.getElementById('respectsCount').innerHTML = quantity;
//     }
// };
//
// var repeater = setInterval(pivoGive, 1000/pivoAmount);

setInterval(function storyGive() {
    if (storyAmount >= 1) {
        quantity += storyAmount*storyMultiplier;
        localStorage.setItem('savedQuantity', quantity);
        document.getElementById('respectsCount').innerHTML = quantity;
    }
},1000);

function resetSave() {
    localStorage.removeItem('savedQuantity');
    localStorage.removeItem('pivoPriceMultiplier');
    localStorage.removeItem('pivoPrice');
    localStorage.removeItem('pivoAmount');
    localStorage.removeItem('storyPriceMultiplier');
    localStorage.removeItem('storyPrice');
    localStorage.removeItem('storyAmount');
    quantity = 0;
    pivoPrice = 15;
    pivoAmount = 0;
    pivoPriceMultiplier = 1;
    storyPrice = 100;
    storyAmount = 0;
    storyPriceMultiplier = 1;
    document.getElementById('respectsCount').innerHTML = quantity;
    document.getElementById('pivoPrice').innerHTML = pivoPrice;
    document.getElementById('pivoAmount').innerHTML = pivoAmount;
    document.getElementById('storyPrice').innerHTML = storyPrice;
    document.getElementById('storyAmount').innerHTML = storyAmount;

}

// window.onload(function pivoTimer () {
//     setInterval(function pivoGive() {
//         if (pivoAmount >= 1) {
//             quantity++;
//             localStorage.setItem('savedQuantity', quantity);
//             document.getElementById('respectsCount').innerHTML = quantity;
//         }
//     },(1000/pivoAmount*pivoMultiplier));
// });


// var allRespects = 0;
// setInterval(function allRespects() {
//     var allRespects = 0;
//     allRespects += quantity;
//     document.getElementById('numberOfAllRespects').innerHTML = allRespects;
// },1000);