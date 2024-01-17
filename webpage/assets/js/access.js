function checkInput() {
    var inField = document.getElementById('inputField').value.toLowerCase();
    var passCode = 'projects@bbk.hu';
    if (inField.includes(passCode)) {
        window.location.href = '../html/project-management.html';
    }
}