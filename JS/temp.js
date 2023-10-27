// JavaScript code

// Function to greet the user
function greetUser() {
    const userName = prompt("What's your name?");
    if (userName) {
        alert(`Hello, ${userName}! Welcome to my website.`);
    }
}

// Function to change the background color
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Event listener to trigger the background color change
document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);

// Call the greetUser function when the page loads
greetUser();
