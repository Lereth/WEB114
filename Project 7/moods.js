// Ethan Schlereth
// 4/19/2026

// Select elements

const message = document.querySelector("#message");
const title = document.querySelector("#title");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");


// Data Objects 

const moods = {

    happy: {
        name: "Happy",
        bg: "#FFD700",
        text: "#bd26b0",
        message: "Warm smiles and the sun’s kisses!"
    },

    calm: {
        name: "Calm",
        bg: "#87CEEB",
        text: "#2F4F4F",
        message: "Peaceful waves and quiet thoughts."
    },

    angry: {
        name: "Angry",
        bg: "#8B0000",
        text: "#FFFFFF",
        message: "Take a breath... cool down."
    },

    sleepy: {
        name: "Sleepy",
        bg: "#2C2C54",
        text: "#F5F5F5",
        message: "Time to rest and recharge."
    }
};

//Function

function changeMood(moodName) {

    const mood = moods[moodName];

    // Change background color
    document.body.style.backgroundColor = mood.bg;

    // Change text color
    document.body.style.color = mood.text;

    // Update message
    message.textContent = mood.message;

    // Update title
    title.textContent = mood.name;

    // Debugging
    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}


// Event Handlers

function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
