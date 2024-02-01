// I spent 2 days to make this garbage work properly. I hate it so much. -WorkSquash 2024.

function clearInputField() {
    document.getElementById('inputField').value = '';
}

window.addEventListener('pageshow', clearInputField);
document.getElementById('inputField').addEventListener('input', checkInput);

function checkInput() {
    var inputField = document.getElementById('inputField').value.toLowerCase();
    var validCodes = {
        '0001': '../assets/pdf/neumann-120.pdf',
        '0002': '../assets/pdf/template.pdf'
    };

    if (Object.keys(validCodes).includes(inputField)) {
        window.open(validCodes[inputField], '_blank');
        console.log('Az oldal sikeresen megnyitva');
        clearInputField();
    }
}
