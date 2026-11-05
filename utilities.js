function clickomatic() {
    alert("You clicked the button!");
}

alert("Welcome to my portfolio! I hope you enjoy your visit.");

const click = document.getElementById("click");

click.addEventListener("click",(event) => {
    clickomatic();
});