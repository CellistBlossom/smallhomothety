//currently this makes the grub meemawmaw when you click it. it will possibly do other things in the future. who can really say
const meemawmaw = new Audio('/music/grub_idle_or_look_1.ogg');
const grubbyImage = document.getElementById("grubby-image");

//pet counter!!!
var petCounter = 0;
document.getElementById("pet-counter").innerHTML = "Pets given: " + petCounter;

grubbyImage.addEventListener("click", petTheGrub);

function petTheGrub() {
    meemawmaw.play();
    petCounter++;
    document.getElementById("pet-counter").innerHTML = "Pets given: " + petCounter;
}