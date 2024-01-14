const display = document.getElementById("display");
let memory = 0;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}

function memorySub() {
    memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}
