let icon1El = document.getElementById('icon1');
let icon2El = document.getElementById('icon2');
let TotalContentEl = document.getElementById('TotalContent');
let navBarLogo = document.getElementById('navBarLogo');
let mainNav = document.getElementById('mainNav');
let navBarListEl = document.getElementById('navBarList');
let navBarLogoEl = document.getElementById('brandLogo');
icon1El.onclick = function() {

    TotalContentEl.style.display = 'none';
    navBarLogo.style.display = 'none';
    icon1El.style.display = 'none';
    navBarListEl.style.display = 'block';
    icon2El.style.display = 'block';
    mainNav.style.backgroundColor = 'black';
    navBarLogo.style.display = 'none';


}


icon2El.onclick = function() {
    TotalContentEl.style.display = 'block';
    navBarLogo.style.display = 'block';
    icon2El.style.display = 'block';
    navBarListEl.style.display = 'none';
    icon1El.style.display = 'block';


}