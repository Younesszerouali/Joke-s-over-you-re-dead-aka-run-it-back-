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

// 4. Strictly Bounded Fleeing Button
const noBtn = document.getElementById("no");
const warningText = document.getElementById("warningText");
let noClickCount = 0;

const funnyTexts = [
    "Awdi ya l9raya awdi... 😂",
    "Aji fin mchia? Wa klicki 'Nhdro' 🙄❤️",
    "hachofi wkan 😂",
    "galk chrab ysseker yak hadi la o clickiti 3liha 👀",
    "baraka 3lik baraka 3lik clicki flkhra😂"
];

function moveButton(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (!noBtn) return;

    // أبعاد الزر الفعلية
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width || 100;
    const btnHeight = btnRect.height || 45;

    // مسافة أمان لمنع الخروج برا الشاشة
    const padding = 25;

    // حساب الحدود القصوى المضمونة
    const maxX = Math.max(padding, window.innerWidth - btnWidth - padding);
    const maxY = Math.max(padding, window.innerHeight - btnHeight - padding);

    // مواقع عشوائية محصورة بين padding و maxX/maxY
    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    // تطبيق الموقع
    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // تبديل الجملة المضحكة
    if (warningText) {
        warningText.innerText = funnyTexts[noClickCount % funnyTexts.length];
        noClickCount++;
    }
}

if (noBtn) {
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
