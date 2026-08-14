/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1200);

});


/* ==========================================
   CUSTOM CURSOR
   DESKTOP ONLY
========================================== */

const isMobile =
    window.matchMedia("(max-width: 900px)").matches;


if (!isMobile) {

    const cursor =
        document.getElementById("cursor");

    const ring =
        document.getElementById("cursor-ring");

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left =
            mouseX + "px";

        cursor.style.top =
            mouseY + "px";

    });


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * 0.12;

        ringY +=
            (mouseY - ringY) * 0.12;

        ring.style.left =
            ringX - 17 + "px";

        ring.style.top =
            ringY - 17 + "px";

        requestAnimationFrame(
            animateCursor
        );

    }

    animateCursor();


    document
        .querySelectorAll("a, button")
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    ring.style.width =
                        "60px";

                    ring.style.height =
                        "60px";

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    ring.style.width =
                        "35px";

                    ring.style.height =
                        "35px";

                }
            );

        });

}


/* ==========================================
   CURSOR HOVER
========================================== */

const hoverElements =
    document.querySelectorAll("a, button");

hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        ring.style.width = "60px";
        ring.style.height = "60px";

    });

    element.addEventListener("mouseleave", () => {

        ring.style.width = "35px";
        ring.style.height = "35px";

    });

});


/* ==========================================
   MENU
========================================== */

const menuButton =
    document.getElementById("menuButton");

const menu =
    document.getElementById("menu");


menuButton.addEventListener("click", () => {

    menu.classList.toggle("open");

});


/* ==========================================
   CLOSE MENU
========================================== */

document
    .querySelectorAll("#menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");

        });

    });


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".story-content, " +
        ".breaking-flow, " +
        ".psychology-item, " +
        ".film-container, " +
        ".feedback-content, " +
        ".credits-list"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ==========================================
   HERO PARALLAX
========================================== */

const heroTitle =
    document.querySelector(".hero-title");


window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        heroTitle.style.transform =
            `translateY(${scroll * 0.25}px)`;

        heroTitle.style.opacity =
            1 - scroll / window.innerHeight;

    }

});


/* ==========================================
   WATER GLASS MOVEMENT
========================================== */

const glass =
    document.querySelector(".glass");


window.addEventListener("mousemove", (e) => {

    if (!glass) return;

    const x =
        (e.clientX / window.innerWidth - .5) * 10;

    const y =
        (e.clientY / window.innerHeight - .5) * 10;

    glass.style.transform =
        `rotate(18deg) translate(${x}px, ${y}px)`;

});


/* ==========================================
   SCROLL WATER EFFECT
========================================== */

let lastScroll = 0;


window.addEventListener("scroll", () => {

    const current =
        window.scrollY;

    const speed =
        Math.abs(current - lastScroll);

    const waterLayer =
        document.querySelector(".water-layer");

    if (waterLayer) {

        waterLayer.style.opacity =
            Math.min(.8, .25 + speed / 20);

    }

    lastScroll = current;

});


/* ==========================================
   CLICK WATER DROP
========================================== */

document.addEventListener("click", (e) => {

    const drop =
        document.createElement("div");

    drop.innerHTML = "💧";

    drop.style.position = "fixed";

    drop.style.left =
        e.clientX + "px";

    drop.style.top =
        e.clientY + "px";

    drop.style.fontSize = "15px";

    drop.style.pointerEvents = "none";

    drop.style.zIndex = "9999";

    document.body.appendChild(drop);


    const animation =
        drop.animate(

            [
                {
                    transform: "scale(.5)",
                    opacity: 1
                },

                {
                    transform:
                        "scale(2) translateY(50px)",
                    opacity: 0
                }

            ],

            {
                duration: 900,
                easing: "ease-out"
            }

        );


    animation.onfinish = () => {

        drop.remove();

    };

});


/* ==========================================
   ACTIVE SECTION
========================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 300;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });

    console.log("Current section:", current);

});


/* ==========================================
   REDUCE ANIMATION FOR MOBILE
========================================== */

if (
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    document.documentElement.style
        .scrollBehavior = "auto";

}
/* ==========================================
   MOBILE VIEWPORT
========================================== */

function checkMobileLayout() {

    const width = window.innerWidth;

    document.body.classList.toggle(
        "mobile",
        width <= 600
    );

    document.body.classList.toggle(
        "tablet",
        width > 600 && width <= 900
    );

}

checkMobileLayout();

window.addEventListener(
    "resize",
    checkMobileLayout
);


/* ==========================================
   PREVENT HORIZONTAL OVERFLOW
========================================== */

document.documentElement.style
    .overflowX = "hidden";

document.body.style
    .overflowX = "hidden";