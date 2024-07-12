

var audio = new Audio()

document.addEventListener('keydown', function(event) {
    // Check if the space key (" ") is pressed
    if (event.code === 'Space') {
        event.preventDefault()
        audio.pause()
    }
});

var ZLONE = document.getElementById('ZLONE')
ZLONE.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'camaro.mp3';
    audio.play();
});

var FerrariF = document.getElementById('FerrariF')
FerrariF.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'FerrariRev.mp3';
    audio.play();
});

var Jesko = document.getElementById('Jesko')
Jesko.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'Jesko.mp3';
    audio.play();
});


var M4Comp = document.getElementById('M4Comp')
M4Comp.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'm4comp.mp3';
    audio.play();
});

var Maserati = document.getElementById('Maserati')
Maserati.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'masgt.mp3';
    audio.play();
});

var Mk5S = document.getElementById('Mk5S')
Mk5S.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'supra.mp3';
    audio.play();
});

var Mk4S = document.getElementById('Mk4S')
Mk4S.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'Supramk3.mp3';
    audio.play();
});

var GT3RS = document.getElementById('GT3RS')
GT3RS.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'gt3rs.mp3';
    audio.play();
});
var charger = document.getElementById('charger')
charger.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'srtcharger.mp3';
    audio.play();
});
var challenger = document.getElementById('challenger')
challenger.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'challengersrt.mp3';
    audio.play();
});
var demon = document.getElementById('demon')
demon.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'demon.mp3';
    audio.play();
});
var trackhawk = document.getElementById('trackhawk')
trackhawk.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'trackhawk.mp3';
    audio.play();
});
var r34 = document.getElementById('r34')
r34.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'r34.mp3';
    audio.play();
});
var r35 = document.getElementById('r35')
r35.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'r35.mp3';
    audio.play();
});
var r8 = document.getElementById('r8')
r8.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'r8.mp3';
    audio.play();
});
var quattro = document.getElementById('quattro')
quattro.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'quattro.mp3';
    audio.play();
});
var escalade = document.getElementById('escalade')
escalade.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'mom.mp3';
    audio.play();
});
var c8 = document.getElementById('c8')
c8.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'c8.mp3';
    audio.play();
});
var rs6 = document.getElementById('rs6')
rs6.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'rs6.mp3';
    audio.play();
});
var huayra = document.getElementById('huayra')
huayra.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'huayra.mp3';
    audio.play();
});
var zonda = document.getElementById('zonda')
zonda.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'zonda.mp3';
    audio.play();
});
var gt500 = document.getElementById('gt500')
gt500.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'gt500.mp3';
    audio.play();
});
var db12 = document.getElementById('db12')
db12.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'db12.mp3';
    audio.play();
});
var chiron = document.getElementById('chiron')
chiron.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'chiron.mp3';
    audio.play();
});
var gto = document.getElementById('gto')
gto.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'gto.mp3';
    audio.play();
});
var huracan = document.getElementById('huracan')
huracan.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'huracan.mp3';
    audio.play();
});
var aventador = document.getElementById('aventador')
db12.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'aventador.mp3';
    audio.play();
});
var urus = document.getElementById('urus')
urus.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'urus.mp3';
    audio.play();
});
var viper = document.getElementById('viper')
viper.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'viper.mp3';
    audio.play();
});
var p1 = document.getElementById('p1')
p1.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'p1.mp3';
    audio.play();
});
var ttrs = document.getElementById('ttrs')
ttrs.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'ttrs.mp3';
    audio.play();
});
var f = document.getElementById('f')
f.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'f.mp3';
    audio.play();
});
var rx7 = document.getElementById('rx7')
rx7.addEventListener('click', function () {
    console.log('clicked');
    audio.src = 'rx7.mp3';
    audio.play();
});

var search = document.getElementById('search')
search.addEventListener('input', function() {
  // Example input value for partial search
    let inputValue = search.value.toLowerCase()

    // Construct a regex pattern to match any substring
    let regexPattern = new RegExp(inputValue, 'i'); // 'i' flag for case-insensitive matching

    // Select all elements with a data-search attribute
    let elements = document.querySelectorAll('[data-search]');

    console.log(elements)

    // Iterate over elements to find matches
    elements.forEach(element => {
        // Get the value of the data-search attribute
        let dataSearchValue = element.getAttribute('data-search');

        element.style.display = 'none';
        // Test if the attribute value contains the input value as a substring
        if (regexPattern.test(dataSearchValue)) {
            // Do something with the matched element
            element.style.display = 'block';
        }
    });
});
