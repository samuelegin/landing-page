const nav = document.querySelector("#nav")
const open = document.querySelector("#open")
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.style.top="0"
})

close.addEventListener("click", () => {
  nav.style.top = "-18rem";
});