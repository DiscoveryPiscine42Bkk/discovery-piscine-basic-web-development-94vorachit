const circleColor = document.getElementById("circle");
const colors = [`red`, `green`, `blue`];
let colorIndex = 0;
circleColor.addEventListener("click", function() {
    circle.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    console.log(colorIndex);
});
console.log(colorIndex);

let circleWeith = document.querySelector("circle");
circleWeith.addEventListener("click", () => {
    updateWeith(1);
})
function updateWeith(val){
    let currentWeith = getComputedStyle(circleWeith).width;
    currentWeith = parseInt(currentWeith);
    if(currentWeith == 420) return;
    circleWeith.style.width = `${currentWeith + val*10}px`
};



