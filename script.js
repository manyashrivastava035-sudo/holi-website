function startColors() {
    for (let i = 0; i < 80; i++) {
        let color = document.createElement("div");
        color.classList.add("color");

        let colors = [
            "#ff4e50",
            "#fc913a",
            "#f9d423",
            "#00c9ff",
            "#92fe9d",
            "#ff00de"
        ];

        color.style.background = colors[Math.floor(Math.random() * colors.length)];
        color.style.left = Math.random() * window.innerWidth + "px";
        color.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(color);

        setTimeout(() => {
            color.remove();
        }, 4000);
    }
}
