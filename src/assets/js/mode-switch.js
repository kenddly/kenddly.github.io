const tabs = document.querySelectorAll(".tab");
const dot = document.querySelector(".mode-dot");
const entries = document.querySelectorAll(".entry");

entries.forEach(
    entry => {
        console.log(entry);
        const show = entry.classList.contains("project");
        entry.style.display = show ? "block" : "none";
    }
)

const TRACK_WIDTH = 180;

function onClickTab(tab) {
    tab.addEventListener("click", () => {
        const mode = tab.dataset.mode;

        // UI state
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Move signal dot
        gsap.to(dot, {
            x: mode === "blog" ? TRACK_WIDTH : 0,
            duration: 0.6,
            ease: "expo.out"
        });

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

