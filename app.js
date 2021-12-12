let MyBtn = document.getElementById('MyBtn');
let close = document.getElementById("close");
let modal = document.getElementById("MyModal");
let add = document.getElementById('add');


let Fenetre = (modal) => {
    this.modal = modal;
    modal.style.display = "block";

    MyBtn.addEventListener("click", () => {
        modal.style.display = "block";
    })

    close.addEventListener("click", () => {
        modal.style.display = "none";
    })


    add.addEventListener("click", () => {
        moddal2.style.display = "block";
    })

}



let nouveau = function (modal2) {
    Fenetre.call(this, modal, modal2);
};

nouveau.prototype = Object.create(Fenetre);
nouveau.prototype.constructor = nouveau;
nouveau.prototype.modd =function (){
    if (this.modal2){
        return moddal2.style.display = "block";
    }
}
let moddal2 = new nouveau("modal2");
Fenetre(modal, nouveau);
