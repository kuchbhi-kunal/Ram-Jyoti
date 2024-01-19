// document.getElementById('addDiyaBtn').addEventListener('click', addDiya);

// let diyaCount = 0;
// const diyaLimitPerStep = 4;

// function addDiya() {
//     const staircase = document.getElementById('staircase');

//     // Check if a new step needs to be added
//     if (diyaCount % diyaLimitPerStep === 0) {
//         const newStep = document.createElement('div');
//         newStep.classList.add('staircase');
//         staircase.appendChild(newStep);
//     }

//     // Create a new diya element
//     const diya = document.createElement('div');
//     diya.classList.add('diya');

//     // Append the diya to the current step
//     const currentStep = document.querySelector('.staircase:last-child');
//     currentStep.appendChild(diya);

//     diyaCount++;
// }

// script.js
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToUserDiya() {
    // Replace 'userDiyaId' with the actual ID or class of the unique user's Diya
    var userDiyaElement = document.getElementById('userDiyaId');

    if (userDiyaElement) {
        userDiyaElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// script.js
function scrollToUserDiya() {
    // Replace 'userDiyaId' with the actual ID or class of the unique user's Diya
    var userDiyaElement = document.getElementById('userDiyaId');

    if (userDiyaElement) {
        // Scroll to the user's Diya smoothly
        userDiyaElement.scrollIntoView({ behavior: 'smooth' });

        // Add a class to make the Diya glow
        userDiyaElement.classList.add('focus-glow');

        // Remove the class after a few seconds (adjust the time as needed)
        setTimeout(function() {
            userDiyaElement.classList.remove('focus-glow');
        }, 3000); // 3000 milliseconds (3 seconds) in this example
    }
}
