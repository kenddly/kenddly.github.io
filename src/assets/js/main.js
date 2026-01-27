import "./mode-switch.js";
import "./mouse-glow.js";

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 }
    });

    // Hard reset — hide major systems
    gsap.set([
        ".identity-stack",
        ".signal-rail",
        ".memory-column",
        ".project-card"
    ], { opacity: 0, y: 20 });

    // 1. SYSTEM POWER ON
    tl.fromTo("body",
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
    )

    // 2. IDENTITY STACK — operator presence
        .to(".identity-stack", {
            opacity: 1,
            y: 0,
            duration: 0.5
        })

    // 3. SIGNAL RAIL — data line comes online
        .to(".signal-rail", {
            opacity: 1,
            y: 0,
            duration: 0.4
        }, "-=0.2")

    // 4. MEMORY COLUMN — archive loads
        .to(".memory-column", {
            opacity: 1,
            y: 0,
            duration: 0.4
        }, "-=0.3")

    // 5. PROJECT STREAM — cards register into system
        .to(".project-card", {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.7
        }, "-=0.2");

    const rail = document.querySelector(".signal-rail");
    const dot = document.querySelector(".signal-dot");

    if (rail && dot) {
        gsap.utils.toArray(".project-card").forEach(card => {

            card.addEventListener("mouseenter", () => {

                gsap.to(rail, {

                    filter: "drop-shadow(0 0 8px rgba(255, 190, 80, 0.8))",

                    duration: 0.3

                });

                dot.style.animationPlayState = "paused";

            });


            card.addEventListener("mouseleave", () => {

                gsap.to(rail, {

                    filter: "none",

                    duration: 0.5

                });

                dot.style.animationPlayState = "running";

            });

        }); 
    }

    function updateClock() {
        const el = document.getElementById("kernel-clock");
        if (!el) return;

        const now = new Date();
        const ms = Math.floor(performance.now() % 100)
            .toString()
            .padStart(2, "0");

        el.textContent =
            now.toTimeString().split(" ")[0] + ":" + ms;
    }

    setInterval(updateClock, 60);
});

