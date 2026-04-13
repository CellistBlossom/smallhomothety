//currently this makes the grub meemawmaw when you click it. it will possibly do other things in the future. who can really say
const meemawmaw = new Audio('/music/grub_idle_or_look_1.ogg');
const grubbyImage = document.getElementById("grubby-image");

//pet counter!!!
var petCounter = 0;
document.getElementById("pet-counter").innerHTML = "Pets given: " + petCounter;

var lasttimestamp = 0;
grubbyImage.addEventListener("mousemove", function(event) {
	const diff = event.timeStamp -	lasttimestamp;
	if (lasttimestamp == 0) {
		lasttimestamp = event.timeStamp;
	}
	else if (diff >= 2000) {
		if (diff < 2500) {
			petTheGrub();
		}
		lasttimestamp = event.timeStamp;
	}
})

function petTheGrub() {
    meemawmaw.play();
    petCounter++;
    document.getElementById("pet-counter").innerHTML = "Pets given: " + petCounter;
}
