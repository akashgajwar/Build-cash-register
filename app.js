var billAmount = document.querySelector("#input1");
var cashAmount = document.querySelector("#input2");
var btnCalc = document.querySelector("#calc");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    var bill = parseInt(billAmount.value);
    var cash = parseInt(cashAmount.value);
    var amount = cash - bill;
    var notes = [2000, 500, 100, 20, 10, 5, 1];
    noteCounter = [];

    for(i=0; i<7;i++){

        if(amount >= notes[i]){
            const answer = amount / notes[i];
            var ping = answer.substring(0,1);
            noteCounter[i] = ping;
            amoumt = amount % notes[i];
            // amount = amount - noteCounter[i]*notes[i];
        }else{
            noteCounter[i] = 0;
        }

    }

    for(i=0; i<7;i++){

        if (noteCounter[i] !=0){
            console.log("The denomination of "+ notes[i] + ":" + noteCounter[i]);
        }
    }

    
  

}

 
 



btnCalc.addEventListener("click", clickHandler);