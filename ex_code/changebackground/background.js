const btn = document.getElementById("btn");
let randomnum = () => {
    return Math.floor(Math.random() * 255);
};
let changecolor = () => {
    let randomcolor = `rgb(${randomnum()},${randomnum()},${randomnum()})`;
    document.body.style.backgroundColor = randomcolor;
};
btn.addEventListener("click", changecolor);
window.addEventListener("load", changecolor);