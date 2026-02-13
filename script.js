const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView : 1
        },
        768: {
            slidesPerView : 2
        },
        1024: {
            slidesPerView : 3
        }
    }
  });
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle,index) => {
        if(index < currentActive) {
            circle.classList.add("active");
        }else {
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".active");
    progress.style.width = (actives.length -1) / (circles.length -1) *100 + "%";
    
    if(currentActive === 1) {
        prev.disabled = true;
    }else if(currentActive === circles.length) {
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}
