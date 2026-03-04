const btn = document.getElementById("celebrateBtn");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {

    // Play music
    if (music.paused) {
        music.currentTime = 0; // start from beginning
        music.play().then(() => {
            console.log("Music started ✅");
        }).catch(err => {
            console.log("Music play blocked:", err);
        });
    }

    // Fireworks + color splash
    for (let i = 0; i < 120; i++) createColor(Math.random() * window.innerWidth);
    createFirework();
});

function createColor(left) {
    const c = document.createElement("div");
    c.className = "color";
    c.style.left = left + "px";
    c.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
}

function createFirework() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2;
    for (let i = 0; i < 40; i++) {
        const f = document.createElement("div");
        f.className = "firework";
        f.style.left = x + "px";
        f.style.top = y + "px";
        f.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 1000);
    }
}
