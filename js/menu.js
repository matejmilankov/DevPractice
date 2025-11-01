let hamBtn = document.querySelector(".mobile-ham");
let isOpen = false;
let tl = gsap.timeline();

hamBtn.addEventListener("click", () => {
    if (!isOpen) {
        tl.to(".mobile-navigation", {
            y: "0%",
            duration: 1.5,
            ease: "power3.inOut"
        }).to(".hide a", {
            top: 0
        }, "=-0.4");
        gsap.to(".first-line, .second-line", {
            width: "100%"
        });
        gsap.to(".first-line", {
            rotation: 45,
            y: "5px",
            ease: "expo.inOut"
        });
        gsap.to(".second-line", {
            rotation: -45,
            y: "-5px",
            ease: "expo.inOut"
        });
    } else {
        tl.to(".mobile-navigation", {
            y: "-100%",
            duration: 0.7,
            ease: "power3.in"
        }).to(".hide a", {
            top: "100%"
        }, "<");
        gsap.to(".first-line, .second-line", {
            width: "70%",
            rotation: 0,
            y: 0,
        });
    }

    isOpen = !isOpen;
});