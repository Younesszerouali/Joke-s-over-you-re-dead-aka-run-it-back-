// 1. Automatic Floating Hearts in Background
function createHeart() {
    const bgHearts = document.getElementById("bgHearts");
    if (!bgHearts) return;

    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 5 + "s";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";

    bgHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 400);

// 2. Open Envelope Animation
function openEnvelope() {
    const env = document.getElementById("env");
    if (env) {
        env.classList.add("open");
    }

    setTimeout(() => {
        const envWrapper = document.querySelector(".envelope-wrapper");
        const letterContent = document.getElementById("letterContent");
        
        if (envWrapper) envWrapper.style.display = "none";
        if (letterContent) letterContent.classList.remove("hidden");
    }, 600);
}

// 3. Navigation Functions
function next() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function yes() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}

// 4. Funny Fleeing Button (Fix for first click overflow)
const noBtn = document.getElementById("no");
const warningText = document.getElementById("warningText");
let noClickCount = 0;

const funnyTexts = [
    "Awdi ya l9raya awdi... 😂",
    "Aji fin mchia? Wa klicki 'Nhdro' 🙄❤️",
    "Wlh ma ghatchدّيني! 😂",
    "Ghir 9lly fia z3ma? 👀",
    "Safiy ghlbtini, rj3i nhdro hhhh 😂"
];

function moveButton(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (!noBtn) return;

    // أبعاد الزر الدقيقة
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width || noBtn.offsetWidth || 80;
    const btnHeight = btnRect.height || noBtn.offsetHeight || 40;

    // مسافة أمان من حوافي الشاشة (20px من كل جهة)
    const padding = 20;

    // أقصى إحداثيات مسموح بها داخل الشاشة المرئية
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // عشوائية حتمية داخل نطاق الشاشة فقط
    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    // تطبيق الـ Position بشكل مباشر وآمن
    noBtn.style.position = "fixed";
    noBtn.style.left = `${Math.max(padding, randomX)}px`;
    noBtn.style.top = `${Math.max(padding, randomY)}px`;

    // تبديل الجملة المضحكة
    if (warningText) {
        warningText.innerText = funnyTexts[noClickCount % funnyTexts.length];
        noClickCount++;
    }
}

if (noBtn) {
    // الأحداث للبيسي والموبايل
    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("touchstart", moveButton, { passive: false });
    noBtn.addEventListener("pointerdown", moveButton, { passive: false });
    noBtn.addEventListener("click", moveButton);
}

// 5. Audio Control (Play / Pause)
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