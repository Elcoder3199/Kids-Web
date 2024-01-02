// Sticky Navbar

let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", ()=> {
    if(this.scrollY > 20) {
        navbar.classList.add("sticky")
    }else {
        navbar.classList.remove("sticky");
    }
})

// toggle open class to navbar

let openMenu = document.querySelector("#open-menu"),
    closeMenu = document.querySelector(".close-menu"),
    navbarLinks = document.querySelector(".navbar .middle-side .links");
openMenu.addEventListener("click", ()=> {
    navbarLinks.classList.add("open");
})
closeMenu.addEventListener("click", ()=> {
    navbarLinks.classList.remove("open");
})

// Open Mega menu on hover
let openMegaLinks = document.querySelectorAll("#open-mega-baby");
openMegaLinks.forEach(meg=> {
    meg.addEventListener("mousemove", ()=> {
        let dataClass = meg.dataset.mega;
        document.querySelector(`.${dataClass}`).classList.add("open");
    })
    meg.addEventListener("mouseleave", ()=> {
        let dataClass = meg.dataset.mega;
        document.querySelector(`.${dataClass}`).classList.remove("open");
    })
})
// to down arrow 

let arrowDown = document.querySelector(".arrow-down");
arrowDown.addEventListener("click", ()=> {
    window.scrollTo({
        left : 0,
        top : document.documentElement.clientHeight - 140,
    })
})

let carousel = document.querySelector(".carousel"),
 arrowIcon = document.querySelectorAll(".container .icon i"),
 boxesWidth = carousel.querySelector("li.box").offsetWidth,
 leftIcon = document.querySelector("#left").parentElement,
 rightIcon = document.querySelector("#right").parentElement,
 isDragging = false,
 startX,
 startScrollleft;

//  arrow slide 
arrowIcon.forEach(arrow=>{
    arrow.addEventListener("click", ()=>{
        if(arrow.id === "left") {
            carousel.scrollLeft += -boxesWidth - 20;
        }
        else if(arrow.id === "right") {
            carousel.scrollLeft += boxesWidth + 20;
        }
    })
} )

// slide text 
let iconText = document.querySelectorAll("ul.icon li"),
slideText = document.querySelector(".slide-text .wrapper");
iconText.forEach(icon=> {
    icon.addEventListener("click", ()=> {
        iconText.forEach(icon=> {
            icon.classList.remove("active");
        })
        icon.classList.add("active");
        if(icon.dataset.slide === "1") {
        slideText.scrollLeft = 0;
        }
         else if(icon.dataset.slide === "2") {
        slideText.scrollLeft = slideText.offsetWidth;
        }
        else if(icon.dataset.slide === "3") {
        slideText.scrollLeft = slideText.offsetWidth + slideText.offsetWidth;
        }
    })
})


// Change image On hover Section slider
let sliderImg = carousel.querySelectorAll(".box .image-box img");

sliderImg.forEach(img=>{
    showImage(img);
})

// Section Four change image
let imageShow = document.querySelectorAll(".section-four .container .box .image-box img");
imageShow.forEach(img=> {
    showImage(img)
})

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragend);

// Functions ==========>

// change image on hover 
function showImage(img) {
   let imgSrc = img.src;
   img.addEventListener("mousemove", ()=>{
    img.src = img.dataset.img;
   })
   img.addEventListener("mouseleave", ()=> {
    img.src = imgSrc;
    })
}

// slider function 
function dragstart(e) {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollleft = carousel.scrollLeft;
}
function dragging(e) {
    if(! isDragging) return;
    carousel.scrollLeft = startScrollleft - (e.pageX - startX);
}
function dragend() {
    isDragging = false;
    carousel.classList.remove("dragging");
}

// End slider function 

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.shopify .img-left ', { origin: 'left'});
ScrollReveal().reveal('.shopify .img-right ', { origin: 'right'});