// 1. Automatic Floating Hearts with Click Interaction
let nameToggle = false;

function createHeart() {
    const bgHearts = document.getElementById("bgHearts");
    if (!bgHearts) return;

    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 5 + "s";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";

    heart.addEventListener("click", function(e) {
        e.stopPropagation();
        
        const textToDisplay = nameToggle ? "youness" : "Raouaa";
        nameToggle = !nameToggle;

        const popText = document.createElement("span");
        popText.classList.add("heart-pop-text");
        popText.innerText = textToDisplay;
        popText.style.left = `${e.clientX}px`;
        popText.style.top = `${e.clientY}px`;

        document.body.appendChild(popText);

        setTimeout(() => {
            popText.remove();
        }, 1200);

        heart.remove();
    });

    bgHearts.appendChild(heart);

    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 9000);
}

setInterval(createHeart, 400);

// 2. Navigation Functions
function next() {
    const p1 = document.getElementById("page1");
    const p2 = document.getElementById("page2");
    if (p1) p1.classList.add("hidden");
    if (p2) p2.classList.remove("hidden");
}

function yes() {
    const p2 = document.getElementById("page2");
    const p3 = document.getElementById("page3");
    if (p2) p2.classList.add("hidden");
    if (p3) p3.classList.remove("hidden");
}

// 3. Unlimited Fleeing "La" Button Logic
const funnyTexts = [
    "Awdi ya l9raya awdi... 😂",
    "Aji fin mchia? Wa klicki 'Nhdro' 🙄❤️",
    "hachofi wkan 😂",
    "galk chrab ysseker yak hadi la o clickiti 3liha 👀",
    "baraka 3lik baraka 3lik clicki flkhra😂"
];

let noClickCount = 0;

function moveButton(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    const noBtn = document.getElementById("no");
    const warningText = document.getElementById("warningText");

    if (!noBtn) return;

    // حساب المسافة المتاحة فـ الشاشة كاملة بلا ما يخرج برا
    const w = window.innerWidth - 120;
    const h = window.innerHeight - 80;

    const randomX = Math.floor(Math.random() * w) + 20;
    const randomY = Math.floor(Math.random() * h) + 20;

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "999999";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    if (warningText) {
        warningText.innerText = funnyTexts[noClickCount % funnyTexts.length];
        noClickCount++;
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById("no");
    if (noBtn) {
        noBtn.addEventListener("mouseenter", moveButton);
        noBtn.addEventListener("mouseover", moveButton);
        noBtn.addEventListener("touchstart", moveButton, { passive: false });
        noBtn.addEventListener("click", moveButton);
    }

    // Music Control
    const music = document.getElementById("music");
    const btn = document.getElementById("musicBtn");
    let playing = false;

    if (btn && music) {
        btn.onclick = function() {
            if (!playing) {
                music.play();
                btn.innerHTML = "⏸ Pause Music";
                playing = true;
            } else {
                music.pause();
                btn.innerHTML = "🎵 Play Music";
                playing = false;
            }
        };
    }
});
