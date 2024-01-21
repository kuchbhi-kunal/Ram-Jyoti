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
        }, 3000);
    }
}


// diya popup
function showDiyaPopup() {
    var diyaPopup = document.getElementById('diyaPopup');
    diyaPopup.style.display = 'block';

    var options = {
        // weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        // timeZoneName: 'long'
    };


    // Get the timestamp and display it in the popup
    var timestamp = new Date().toLocaleString('en-US', options);
    document.getElementById('diyaTimestamp').innerHTML = 'Lit on ' + timestamp;

    // Generate a unique QR code for the user
    generateQRCodeForUser();
}

// script.js
function generateQRCodeForUser() {
    var userDiyaElement = event.currentTarget;

    // Replace 'userId' with a unique identifier for the user
    var userId = userDiyaElement.getAttribute('data-user-id');

    // Get the diyaQRCode element
    var diyaQRCodeElement = document.getElementById('diyaQRCode');

    // Clear the content of diyaQRCode element
    diyaQRCodeElement.innerHTML = '';

    // Create a new QR code
    var qrcode = new QRCode(diyaQRCodeElement, {
        text: userId,
        width: 128,
        height: 128
    });
}


function closeDiyaPopup() {
    var diyaPopup = document.getElementById('diyaPopup');
    diyaPopup.style.display = 'none';
}

// Attach click event to each Diya element
var diyaElements = document.getElementsByClassName('user_diya');
for (var i = 0; i < diyaElements.length; i++) {
    diyaElements[i].addEventListener('click', showDiyaPopup);
}

// Attach click event to close button
document.getElementById('closePopupButton').addEventListener('click', closeDiyaPopup);

