let MyBtn = document.getElementById('MyBtn');
let close = document.getElementById("close");
let modal = document.getElementById("MyModal");


MyBtn.addEventListener("click",  () => {
    modal.style.display = "block";
})

close.addEventListener("click", () => {
    modal.style.display = "none";
})
