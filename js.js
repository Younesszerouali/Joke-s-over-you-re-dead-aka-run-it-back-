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

    // أبعاد مضمونة باش ما يخرجش على الشاشة نهائياً
    const btnWidth = 80;
    const btnHeight = 40;

    const padding = 50; // مسافة أمان من جنبات الشاشة
    const maxX = Math.max(10, window.innerWidth - btnWidth - padding);
    const maxY = Math.max(10, window.innerHeight - btnHeight - padding);

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "999999";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    if (warningText) {
        warningText.innerText = funnyTexts[noClickCount % funnyTexts.length];
        noClickCount++;
    }
}

// Attach event listeners safely
document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById("no");
    if (noBtn) {
        // حركات متعددة باش ما تقدرش تكليكي عليه أبدًا
        noBtn.addEventListener("mouseenter", moveButton);
        noBtn.addEventListener("mouseover", moveButton);
        noBtn.addEventListener("mousemove", moveButton);
        noBtn.addEventListener("touchstart", moveButton, { passive: false });
        noBtn.addEventListener("pointerdown", moveButton, { passive: false });
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
