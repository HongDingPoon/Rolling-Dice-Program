// Hong, 3, 9/29/2023
function createParagraph() {
    let para = document.createElement("p");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let x = (parseInt(Math.floor(Math.random() * 6)) + 1);
    let y = (parseInt(Math.floor(Math.random() * 6)) + 1);
    para.textContent = "First dice: " + x;
    para1.textContent = "Second dice: " + y;
    para2.textContent = "Total: " + (x + y);
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener("click", createParagraph)
}
