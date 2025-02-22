document.addEventListener("DOMContentLoaded", function () {
    const background = document.querySelector(".background");

    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);

        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;

        setTimeout(() => particle.remove(), 5000);
    }

    setInterval(createParticle, 500);
});
