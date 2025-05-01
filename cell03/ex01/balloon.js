const circle = document.getElementById("circle");
const colors = [`red`, `green`, `blue`];
let colorIndex = 0;

let currentWidth = document.getElementById("circle").offsetWidth
let currentHeight = document.getElementById("circle").offsetHeight

circle.addEventListener("click", function() {
    circle.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    console.log(colorIndex);

    currentHeight = currentHeight + 10;
    currentWidth = currentWidth + 10;
    circle.style.width = currentWidth + "px";
    circle.style.height = currentHeight + "px";
    console.log(currentWidth);
    console.log(currentHeight);
});

const mouse = document.getElementById("circle");
mouse.addEventListener("mouseleave", function() {
    
    circle.style.backgroundColor = colors[colorIndex];
    colorIndex = Math.abs((colorIndex - 1) % colors.length);
    console.log(colorIndex);

    currentHeight = currentHeight - 5;
    currentWidth = currentWidth - 5;
    circle.style.width = currentWidth + "px";
    circle.style.height = currentHeight + "px";
    console.log(currentWidth);
    console.log(currentHeight);
});



//let circleWidth = document.querySelector("circle");
//circleWidth.addEventListener("click", () => {
//    updateWeith(1);
//});
//function updateWeith(val){
//    const currentWidth = document.getElementById("circle").offsetWidth;
  //  currentWeith = parseInt(currentWeith);
    //if(currentWeith == 420) return;
    //circleWeith.style.width = `${currentWeith + val*10}px`
//};

