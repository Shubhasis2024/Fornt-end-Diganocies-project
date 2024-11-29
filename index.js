// const value1=document.getElementsByClassName('nav-link active3');
// console.log(value1);
// function showText(text) {
//     document.getElementById('contentArea').innerText = text;
// }

const lines = [
    "Your Health, Our Priority: Accurate Diagnostics for a Better Tomorrow.",
"Trusted Testing, Timely Results: Empowering Health Decisions.",
   
   
];

const container = document.getElementById('text-container1');

// Function to add a line of text to the container
function addLine(line, index) {
    const p = document.createElement('p');
    p.textContent = line;
    p.className = 'line';
    container.appendChild(p);

    // Add the visible class after a slight delay to trigger the animation
    setTimeout(() => {
        p.classList.add('visible');
    }, 100);
}

// Loop through each line with a delay
lines.forEach((line, index) => {
    setTimeout(() => {
        addLine(line, index);
    }, index * 1000); // Adjust delay between lines (in milliseconds)
});