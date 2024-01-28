function getRandomLink() { // Random safe links here because i don't wanna get fucked....
    const links = [
        'https://google.com',
        'https://netacad.com',
        'https://w3school.org',
    ];
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}


function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

const randomPassCode = generateRandomPassword(12);

console.log("Random PassCode:", randomPassCode); //How the fuck does anybody will know this? Ctrl+Shift+I