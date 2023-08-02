
let answer = document.querySelector("#answer");

let number = document.querySelector("#number");
let firstUnit = document.querySelector("#firstUnit");
let secondUnit = document.querySelector("#secondUnit");

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