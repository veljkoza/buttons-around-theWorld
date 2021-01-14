const rightNav = document.getElementById("right-nav");
const leftNav = document.getElementById("left-nav");
const btnsContainer = document.getElementsByClassName("btns-container")[0];
const allBtns = document.getElementsByClassName("btn-container");
const noOfElements = allBtns.length;
let currentPosition = 0;
let currentLeft = 0;
const leftClicked = () => {
    if (currentPosition !== 0) {
        currentPosition--;
        currentLeft = currentPosition * -100;
        btnsContainer.style.left = `${currentLeft}vw`;
    }
};

const rightClicked = () => {
    if (currentPosition !== noOfElements - 1) {
        currentPosition++;
        currentLeft = currentPosition * -100;
        btnsContainer.style.left = `${currentLeft}vw`;
    }
};
const addEventListeners = () => {
    leftNav.addEventListener("click", leftClicked);
    rightNav.addEventListener("click", rightClicked);
};

addEventListeners();
