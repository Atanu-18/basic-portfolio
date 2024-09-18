let btn1 = document.getElementById('btn1');

function show() {
    let vaL = document.getElementById('btn1').value;
    document.getElementById('btn1').textContent = "CONGRATS!!"
}

btn1.addEventListener('click',show);

// function hamburg() {
//     const navbar = document.querySelector(".dropdown")
//     navbar.style.transform = "translateY(0px)"
// }

// function cancel() {
//     const navbar = document.querySelector(".cancel")
//     navbar.style.transform = "translateY(-500px)"
// }

// const texts = {
//     "DEVELOPER",
//     "PROGRAMMER"
// }

// const speed = 100;
// const textElements = document.querySelector(".typewriter-text")

// let textIndex = 0;
// let chracterIndex = 0;

// function typeWriter() {
//     if(chracterIndex < texts[textIndex].length) {
//         textElements.innerHTML += texts[textIndex].charAt(chracterIndex);
//         chracterIndex++;
//         setTimeout(typeWriter,speed);
//     } else {
//         setTimeout(eraseText,100)
//     }
// }

// function eraseText() {
//     if(textElements.innerHTMLlength>0) {
//         textElements.innerHTML = textElements.innerHTML.slice(0,-1);
//         setTimeout(eraseText,50);
//     } else {
//         textIndex = (textIndex + 1)%texts.length;
//         chracterIndex = 0;
//         setTimeout(typeWriter,500);
//     }
// }

// window.onload = typeWriter;

