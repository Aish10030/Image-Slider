const next = document.querySelector(".next");
const previous = document.querySelector(".prev");

next.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0])
})

previous.addEventListener("click", () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length-1])
})