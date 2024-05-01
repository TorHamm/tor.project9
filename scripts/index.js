const account = document.getElementById("account");
const share = document.getElementById("share");
const container = document.getElementsByClassName("container");

const sharebtn = document.getElementById("sharebtn");
const clickedsharebtn = document.getElementById("clickedsharebtn");
const social = document = document.getElementsByClassName("social");
const sharebtnimg = document.getElementById("shareimg")
const triangle = document.getElementById("triangle");

const facebook = document.querySelector('img[alt="icon-facebook"]');
const twitter = document.querySelector('img[alt="icon-twitter"]');
const pinterest = document.querySelector('img[alt="icon-pinterest"]');

let isOn = false;

//phone
function displaysharephone() {
    sharebtn.addEventListener ('click' , () => {
        share.style.display = "flex";
        account.style.display = "none";
    });
    clickedsharebtn.addEventListener ('click' , () => {
        share.style.display = "none";
        account.style.display = "flex";
    });
}

//desktop
function displaysharedesktop() {
    sharebtn.addEventListener ('click' , () => {
        isOn = !isOn;
        if (isOn) {
            share.style.display = "flex";
            sharebtn.style.backgroundColor = "hsl(214, 17%, 51%)";
            sharebtnimg.src = "/images/icon-share-white.svg";
            clickedsharebtn.style.display = "none";
            triangle.style.display = "block";
        }  else {
            share.style.display = "none";
            sharebtn.style.backgroundColor = "hsl(210, 46%, 95%)";
            sharebtnimg.src = "/images/icon-share.svg";
            triangle.style.display = "none";
        }
    });
}

function link (platform , link) {
    platform.addEventListener ('click' , () => {
        window.open(link , '_blank');
    });
}

function breakpointhandler(matches) {
    if (matches) {
        displaysharedesktop();
        
    } else {
        displaysharephone();
    }
}

var breakpoint = window.matchMedia("(min-width: 768px)");

breakpointhandler(breakpoint.matches);

link(facebook , 'https://www.facebook.com/');
link(twitter , 'https://twitter.com/');
link(pinterest , 'https://www.pinterest.com/');