const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true;
speech.interimResults = false;
let text = "";

function setup(){
    speech.start();
    console.log("STT has started!")
};

function parseResult(){
    if (speech.resultValue){
        text += speech.resultString + "\n";
        document.getElementById("out").innerHTML = text;
    }
}