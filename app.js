var billAmount = document.querySelector("#input1");
var cashAmount = document.querySelector("#input2");
var btnCalc = document.querySelector("#calc");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    var bill = parseInt(billAmount.value);
    var cash = parseInt(cashAmount.value);
    var amount = cash - bill;
    var notes = [2000, 500, 100, 20, 10, 5, 1];
    noteCounter = [];
    outputPrint = [];

    for (i = 0; i < 7; i++) {

        if (amount >= notes[i]) {
            var answer = Math.floor(amount / notes[i]);

            noteCounter[i] = answer;

            amount = amount - noteCounter[i] * notes[i];
        } else {
            noteCounter[i] = 0;
        }
    }

    for (i = 0; i < 7; i++) {

        if (noteCounter[i] != 0) {
            outputPrint[i] = ("Number of notes of " + notes[i] + "=" + noteCounter[i] + ('\r\n'));
        }
    }

    outputDiv.innerText = outputPrint;
}

btnCalc.addEventListener("click", clickHandler);