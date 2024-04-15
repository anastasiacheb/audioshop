const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav--menu-open');

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
});

document.querySelectorAll(".nav--list-link").forEach(n => n.
    addEventListener("click", () => {
        burger.classList.remove("active");
       menu.classList.remove("active");
    })   
       )

const backBtn = document.querySelector('.back-to-top-button');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
    backBtn.classList.add("show");
}   else {
    backBtn.classList.remove("show");
}
});

backBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const darkMode = document.querySelector('.dark-mode');

const lightMode = document.querySelector('.light-mode');

darkMode.addEventListener('click', () => {
    document.documentElement.style.setProperty('--black', '#f9faff');
    document.documentElement.style.setProperty('--white', '#282828');
    darkMode.classList.toggle("active");
    lightMode.classList.toggle("active");
})

lightMode.addEventListener('click', () => {
    document.documentElement.style.setProperty('--black', '#101010');
    document.documentElement.style.setProperty('--white', '#f9faff');
    darkMode.classList.toggle("active");
    lightMode.classList.toggle("active");
})