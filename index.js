

const navItems = document.querySelectorAll(".nav-item");
const slider = document.querySelector(".nav-slider");

function moveSlider(element) {
    slider.style.width = `${element.offsetWidth}px`;
    slider.style.transform = `translateX(${element.offsetLeft - 6}px)`;
}

const activeItem = document.querySelector(".nav-item.active");

if (activeItem) {
    moveSlider(activeItem);
}

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        moveSlider(item);

    });

});




const particles = document.querySelector(".particles");

for(let i = 0; i < 60; i++){

    const ember = document.createElement("span");

    ember.className = "ember";

    ember.style.left = Math.random() * 100 + "%";
    ember.style.top = Math.random() * 100 + "%";

    ember.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    ember.style.animationDelay =
        Math.random() * 10 + "s";

    particles.appendChild(ember);

}




const revealElements = document.querySelectorAll(
    ".feature-card, .hero-logo, .badge, .hero h1, .hero p, .hero-buttons"
);


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
});


revealElements.forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});




const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);


document.addEventListener("mousemove", e=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});




document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.className="ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left =
        e.clientX - rect.left + "px";

        ripple.style.top =
        e.clientY - rect.top + "px";


        this.appendChild(ripple);


        setTimeout(()=>{
            ripple.remove();
        },600);

    });

});
