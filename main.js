const images = [
    'images/slide-1.jpg',
    'images/slide-2.jpg',
    'images/slide-3.jpg',
    'images/slide-4.jpg',
    'images/slide-5.jpg',
    'images/slide-6.jpg',
    'images/slide-7.jpg',
    'images/slide-8.jpg',
    'images/slide-9.jpg',
]
let index = 0

const sliderImage = document.getElementById('carousel-img')
setInterval(() => {
    if (index === images.length) {
        index = 0;
    }
    const slide = images[index]
    sliderImage.setAttribute('src', slide)
    // console.log(sliderImage);
    index++;

}, 3000)

// this is just practice =====>>>>>>

class Data {
    constructor(name, clas, section, roll, age, bestFriend) {
        this.name = name;
        this.clas = clas;
        this.section = section;
        this.roll = roll;
        this.age = age;
        this.bestFriend = bestFriend;
    }
}

const oneStudent = new Data('Abbas', 'Four', 'A', 1, 9, 'Rohit')
const twoStudent = new Data('adnan', 'Four', 'B', 2, 10, 'Rofic')
// console.log(twoStudent);

// input right or wrong chack

// const display = document.getElementById("display");
// const question = document.getElementById("question");
// const startBtn = document.getElementById("starts");
// const countdownOverlay = document.getElementById("countdown");
// const resultModal = document.getElementById("result");
// const modalBackground = document.getElementById("modal-background");

// variables
// let userText = "";
// let errorCount = 0;
// let startTime;
// let questionText = "";

// Load and display question
// fetch("./texts.json")
//   .then((res) => res.json())
//   .then((data) => {
//     questionText = data[Math.floor(Math.random() * data.length)];
//     question.innerHTML = questionText;
//   });

// checks the user typed character and displays accordingly
// const typeController = (e) => {
//   const newLetter = e.key;

//   // Handle backspace press
//   if (newLetter == "Backspace") {
//     userText = userText.slice(0, userText.length - 1);
//     return display.removeChild(display.lastChild);
//   }

//   // these are the valid character we are allowing to type
//   const validLetters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890!@#$%^&*()_+-={}[]'\".,?";

  // if it is not a valid character like Control/Alt then skip displaying anything
//   if (!validLetters.includes(newLetter)) {
//     return;
//   }

//   userText += newLetter;

//   const newLetterCorrect = validate(newLetter);
//   // console.log(userText);

//   if (newLetterCorrect) {
//     display.innerHTML += `<span class="green">${newLetter === " " ? "▪" : newLetter}</span>`;
//   } else {
//     display.innerHTML += `<span class="red">${newLetter === " " ? "▪" : newLetter}</span>`;
//     errorCount ++;
//   }
//   // check if given question text is equal to user typed text
//   if (questionText === userText) {
//     gameOver();
//   }
// };

// const validate = (key) => {
//   if (key === questionText[userText.length - 1]) {
//     return true;
//   }
//   return false;
// };

// // FINISHED TYPING
// const gameOver = () => {
//   document.removeEventListener("keydown", typeController);
//   // the current time is the finish time
//   // so total time taken is current time - start time
//   const finishTime = new Date().getTime();
//   const timeTaken = (finishTime - startTime) / 1000;

//   // show result modal
//   resultModal.innerHTML = "";
//   resultModal.classList.toggle("hidden");
//   modalBackground.classList.toggle("hidden");
//   // clear user text
//   display.innerHTML = "";
//   // make it inactive
//   display.classList.add("inactive");
//   // console.log(timeTaken);
//   const modalTime = parseInt(timeTaken)
//   // console.log(errorCount);
//   // show result
//   resultModal.innerHTML += `
//     <h1>Finished!</h1>
//     <p>You took: <span class="bold">${modalTime}</span> seconds</p>
//     <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
//     <button onclick="closeModal()">Close</button>
//   `;

//   addHistory(questionText, timeTaken, errorCount);

//   // restart everything
//   startTime = null;
//   errorCount = 0;
//   userText = "";
//   display.classList.add("inactive");
// };

// const closeModal = () => {
//   modalBackground.classList.toggle("hidden");
//   resultModal.classList.toggle("hidden");
// };

// const start = () => {
//   // If already started, do not start again
//   if (startTime) return;

//   let count = 3;
//   countdownOverlay.style.display = "flex";

//   const startCountdown = setInterval(() => {
//     countdownOverlay.innerHTML = `<h1>${count}</h1>`;
//     // console.log(startCountdown);

//     // finished timer
//     if (count == 0) {
//       // -------------- START TYPING -----------------
//       document.addEventListener("keydown", typeController);
//       countdownOverlay.style.display = "none";
//       display.classList.remove("inactive");

//       clearInterval(startCountdown);
//       startTime = new Date().getTime();
//       // console.log(clearInterval(startCountdown));
//     }
//     count--;
//   }, 1000);
// };

// // START Countdown
// startBtn.addEventListener("click", start);

// // If history exists, show it
// displayHistory();

// // Show typing time spent
// setInterval(() => {
//   const currentTime = new Date().getTime();
//   const timeSpent = (currentTime - startTime) / 1000;
//   const total = parseInt(startTime ? timeSpent : 0)
//   // console.log(total);
  


//   document.getElementById("show-time").innerHTML = `${total} seconds`;
//   console.log(startTime ? timeSpent : 0);
// }, 1000);

const numbers = [23,58,474,14,25,63,989,74]
// numbers.forEach(num => console.log(num))
const jogor = numbers.map(num => num * 2)
// console.log(jogor);
const filtering = numbers.filter(num => num < 63)
// console.log(filtering);