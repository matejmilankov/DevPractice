let navBar = document.querySelector("header");
let navHeight = navBar.clientHeight;
let heroSection = document.querySelector(".c-section");
heroSection.style.paddingTop = `${navHeight * 2}px`;



let slideBtns = document.querySelectorAll(".question");
slideBtns.forEach((btn) => {
    let click = 1;
    btn.addEventListener("click", () => {

        let parent = btn.parentElement;
        let slideText = parent.querySelector("p");
        let close = btn.querySelector(".plus");

        if (click % 2 == 0) {
            gsap.to(slideText, {
                height: "0px",
                opacity: 0,
                padding: "0",
                display: "none"
            })
            gsap.to(close, {
                rotation: "0"
            })
            click++;
        } else {
            gsap.to(slideText, {
                height: "100%",
                opacity: 0.8,
                padding: "20px 0",
                display: "block"
            })
            gsap.to(close, {
                rotation: "45"
            })
            click++;
        }
    })
});


gsap.from(".item-wrap, .c-hero-item-first p", {
    stagger: {amount: 0.3},
    filter: "blur(20px)",
    y: "40px",
    opacity: "0",
    delay: 0.4
})

