const tabs = document.querySelectorAll(".tab");
const dot = document.querySelector(".mode-dot");
const entries = document.querySelectorAll(".entry");
const modeLabel = document.getElementById("modeLabel");

entries.forEach(
    entry => {
        console.log(entry);
        const show = entry.classList.contains("project");
        entry.style.display = show ? "grid" : "none";
    }
)

function onClickTab(tab) {
    tab.addEventListener("click", () => {
        const mode = tab.dataset.mode;

        // UI state
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Move signal dot
        gsap.to(dot, {
            left: mode === "blog" ? "100%" : "0%",
            duration: 0.6,
            ease: "expo.out"
        });

        modeLabel.textContent = `STREAMING: ${mode === "blog" ? "BLOG" : "PROJECTS"}`;


        // Power down all
        gsap.to(entries, {
            opacity: 0,
            y: 10,
            duration: 0.25,
            stagger: 0.04,
            onComplete: () => {
                entries.forEach(entry => {
                    const show = entry.classList.contains(mode);
                    entry.style.display = show ? "block" : "none";
                });

                // Boot up selected mode
                gsap.fromTo(
                    `.entry.${mode}`,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: "power3.out"
                    }
                );
            }
        });
    });
}

tabs.forEach(onClickTab);

