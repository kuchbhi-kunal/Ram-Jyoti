document.getElementById('addDiyaBtn').addEventListener('click', addDiya);

let diyaCount = 0;
const diyaLimitPerStep = 3;

function addDiya() {
    const staircase = document.getElementById('staircase');

    // Check if a new step needs to be added
    if (diyaCount % diyaLimitPerStep === 0) {
        const newStep = document.createElement('div');
        newStep.classList.add('staircase');
        staircase.appendChild(newStep);
    }

    // Create a new diya element
    const diya = document.createElement('div');
    diya.classList.add('diya');

    // Append the diya to the current step
    const currentStep = document.querySelector('.staircase:last-child');
    currentStep.appendChild(diya);

    diyaCount++;
}
