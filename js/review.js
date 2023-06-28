// local reviews data
const reviews = [{
        id: 1,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: "ICT Business Solutions Plan / Design / Implement.",
    },
    {
        id: 2,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: "ICT Infrastructure Plan / Design / Implement.",
    },
    {
        id: 3,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: "ICT Data Centers Plan / Design / Implement.",
    },
    {
        id: 4,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: " ICT Operation Management. ",
    },
    {
        id: 5,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: " ICT Project Management. ",
    },
    {
        id: 6,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: " Systems Architecture. ",
    },
    {
        id: 7,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: " DevOps Architecture. ",
    },
    {
        id: 8,
        name: "I'M Ahmed Alaiady",
        job: "Specialist in:",
        img: "pers.png",
        text: " AIOps Architecture. ",
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem >= reviews.length - 1) {
        // currentItem < 0;
        currentItem = reviews.length - 1;
        nextBtn.style.color = "#adb2bf";
        nextBtn.style.opacity = ".5";


    } else {
        nextBtn.style.color = "";
        // Revert color of next button
        nextBtn.style.opacity = "1";

    }
    prevBtn.style.color = ""; // Revert color of previous button
    prevBtn.style.opacity = "1";

    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem <= 0) {
        currentItem = 0;
        // currentItem < reviews.length - 1;
        prevBtn.style.color = "#adb2bf";
        prevBtn.style.opacity = ".5";


    } else {
        prevBtn.style.color = ""; // Revert color of previous button
        prevBtn.style.opacity = "1";

    }
    nextBtn.style.color = "";
    nextBtn.style.opacity = "1";
    showPerson(currentItem);
});
// show random person
// randomBtn.addEventListener("click", function() {
//     console.log("hello");

//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson(currentItem);
// });