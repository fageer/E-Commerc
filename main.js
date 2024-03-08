const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}


const MainImg = document.getElementById("MainImg");
const smallimgs = document.querySelectorAll(".small-img");
smallimgs.forEach(img =>{
    img.addEventListener("click", () => {
        MainImg.src = img.src;
    });
});
