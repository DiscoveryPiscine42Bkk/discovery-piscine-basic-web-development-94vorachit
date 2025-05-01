const circleColor = document.getElementById("circle");
const colors = [`red`, `green`, `blue`];
let colorIndex = 0;
circleColor.addEventListener("click", function() {
    circle.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    console.log(colorIndex);
});
console.log(colorIndex);

const currentWidth = document.getElementById("circle").offsetWidth;
console.log(currentWidth);


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

