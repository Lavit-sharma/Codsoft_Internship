const names = ["WEB DEVELOPER", "WEB DESIGNER", "UI/UX DESIGNER", "SOFTWARE ENGINEER", "SOFTWARE DEVELOPER"];
let index = 0;

function changeName() {
    const nameElement = document.getElementById("changingName");
    nameElement.textContent = names[index];
    index = (index + 1) % names.length;
}

setInterval(changeName, 1200);
