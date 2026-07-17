const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");
const slider = document.querySelector(".slider");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        pages.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.page)
            .classList.add("active");

        slider.style.transform = `translateX(${index * 100}%)`;

        if (tab.dataset.page === "discord") {
             window.open("https://discord.gg/getember");
        }

    });

});
