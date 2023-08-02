// let number = document.querySelecto("number");
let answer = document.querySelector("#answer");

let number = document.querySelector("#number");
let firstUnit = document.querySelector("#firstUnit");
let secondUnit = document.querySelector("#secondUnit");

// let hourAnswer = document.getElementById("hourAnswer");
// let minuteAnswer = document.getElementById("minutesAnswer");
// let secondsAnswer = document.getElementById("secondsAnswer");
// {
// function hour() {
//     let numValue = parseFloat(number.value);
//     let hourValue = numValue * 1;
//     hourAnswer.innerHTML = "Hour/s: " + hourValue;

//     let minuteValue = numValue * 60;
//     minuteAnswer.innerHTML = "Minutes: " + minuteValue;

//     let secondsValue = numValue * 3600;
//     secondsAnswer.innerHTML = "Seconds: " + secondsValue;
// }

// function minutes() {
//     let numValue = parseFloat(number.value);
//     let hourValue = numValue / 60;
//     hourAnswer.innerHTML = "Hour/s: " + hourValue;

//     let minuteValue = numValue * 1;
//     minuteAnswer.innerHTML = "Minutes: " + minuteValue;

//     let secondsValue = numValue * 60;
//     secondsAnswer.innerHTML = "Seconds: " + secondsValue;
// }

// function seconds() {
//     let numValue = parseFloat(number.value);
//     let hourValue = numValue / 3600;
//     hourAnswer.innerHTML = "Hour/s: " + hourValue;

//     let minuteValue = numValue / 60;
//     minuteAnswer.innerHTML = "Minutes: " + minuteValue;

//     let secondsValue = numValue * 1;
//     secondsAnswer.innerHTML = "Seconds: " + secondsValue;
// }
// }

function myDisplay () {
    let firstValue = firstUnit.value;
    let secondValue = secondUnit.value;
    let numValue = parseFloat(number.value);

    if (firstValue == "Hours" && secondValue == "Minutes") {
        answer.innerHTML = numValue * 60;
    } else if (firstValue == "Hours" && secondValue == "Seconds") {
        answer.innerHTML = numValue * 3600;
    } else if (firstValue == "Minutes" && secondValue == "Hours") {
        answer.innerHTML = numValue / 60;
    } else if (firstValue == "Minutes" && secondValue == "Seconds") {
        answer.innerHTML = numValue * 60;
    } else if (firstValue == "Seconds" && secondValue == "Hours") {
        answer.innerHTML = numValue / 3600;
    } else if (firstValue == "Seconds" && secondValue == "Minutes") {
        answer.innerHTML = numValue / 60;
    } else if (firstValue === secondValue) {
        alert ("Please choose a different unit of measure.")
    } else {
        answer.innerHTML = "-";
    }
}