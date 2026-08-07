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

// 4. Funny Fleeing Button (Bounded Inside Page Card Container)
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

    // الحصول على حدود البطاقة الرئيسية (Page 2)
    const container = document.getElementById("page2") || noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();

    // أبعاد الزر الدقيقة
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width || 80;
    const btnHeight = btnRect.height || 40;

    const padding = 15; // هامش أمان داخل البطاقة

    // حساب الحدود داخل البطاقة المركزية فقط (وليس الشاشة كاملة)
    const minX = containerRect.left + padding;
    const maxX = containerRect.right - btnWidth - padding;

    const minY = containerRect.top + padding;
    const maxY = containerRect.bottom - btnHeight - padding;

    // توليد إحداثيات عشوائية محصورة فقط داخل الـ Card
    const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    // تطبيق الموقع بـ fixed وضمان بقائه فوق العناصر
    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // تبديل النص للجمل المضحكة
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
