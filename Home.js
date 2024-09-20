// const totalContents = 4;

// function nextContent() {
// // Hide the current content
// document.getElementById(`content${currentContent}`).style.display = 'none';
    
// // Increment the content index
// currentContent = currentContent % totalContents + 1;

// // Show the next content
// document.getElementById(`content${currentContent}`).style.display = 'flex';
// }

let currentContent = 1;
const totalContents = 4;
let intervalId; 

function startAutoSlide() {
    intervalId = setInterval(() => {
        nextContent();
    }, 1000); 
}

function stopAutoSlide() {
    clearInterval(intervalId); 
}

function nextContent() {

    document.getElementById(`content${currentContent}`).style.display = 'none';

    currentContent = currentContent % totalContents + 1;

    document.getElementById(`content${currentContent}`).style.display = 'flex';
}


document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
});


function manualSlide() {
    stopAutoSlide();
    nextContent();
    setTimeout(() => {
        startAutoSlide();
    }, 5000); 
}