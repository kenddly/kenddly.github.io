document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial State: Set items to hidden before starting
    // This allows you to remove 'opacity: 0' from your CSS if you prefer
    gsap.set(".entry-animate, .project-card", { opacity: 0, y: 10 });

    const tl = gsap.timeline({ 
        defaults: { 
            ease: "expo.out", 
            duration: 0.4 // Faster, snappy duration
        } 
    });

    // 2. The Animation Sequence
    tl.to(".entry-animate", {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Very fast stagger
        onComplete: () => {
            // Only clear transform, NOT opacity, so it stays visible
            gsap.set(".entry-animate", { clearProps: "transform" });
        }
    })
    .to(".project-card", {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        // Using a "stepped" look for a more technical feel
        ease: "power2.inOut" 
    }, "-=0.2"); // Overlap with previous animation for flow
});
