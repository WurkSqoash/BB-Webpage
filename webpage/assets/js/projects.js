// I spent 2 days to make this garbage work properly. I hate it so much.

function clearInputField() {
    document.getElementById('inputField').value = '';
}

var fakeIp = Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256) + "." + Math.floor(Math.random() * 256);
console.log(fakeIp + '\nEz nem a te ip címed ez egy véletszerűen generált ip cím!!'); //For testing porpuses only this shouldn't generate real ip addresses i hope...

window.addEventListener('pageshow', clearInputField);
document.getElementById('inputField').addEventListener('input', checkInput);

function checkInput() {
    var inputField = document.getElementById('inputField').value.toLowerCase();
    var validCodes = {
        'bbk-0001': '../assets/pdf/0001.pdf',
        'bbk-0002': '../assets/pdf/0001.pdf'
    };

    if (Object.keys(validCodes).includes(inputField)) {
        window.open(validCodes[inputField], '_blank');
        clearInputField();
    } 
    /*if(!Object.keys(validCodes).includes(inputField) && finishedTyping) {
        alert('Helytelen Azonosító!\nProbáld Újra!');
    }*/
}