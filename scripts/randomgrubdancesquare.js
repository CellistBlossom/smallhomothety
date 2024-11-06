const grubDances = [
	["/images/grubDance.gif", "a dancing grub"],
	["/images/blomgrubDance.gif", "a dancing blomgrub"],
	["/images/purpgrubDance.gif", "a dancing purple grub"],
	["/images/sourgrubdance.gif", "a dancing sourgrub"],
	["/images/grubchuDance.gif", "a dancing grubchu"],
]

function generateSquare() {
	const grubDanceSquare = document.getElementById("grubDanceSquare");
	var rows = grubDanceSquare.children;
	for (var i = 0; i < rows.length; i++) {
		var row = rows[i].children;
		for (var j = 0; j < row.length; j++) {
			var img = row[j];
			var grub = grubDances[Math.floor((Math.random() * grubDances.length))];
			img.src = grub[0];
			img.alt = grub[1];
		}
	}
	const generateButton = document.getElementById("grubDanceSquareGenerator");
	generateButton.innerText = "Regenerate grubDance Square!";
	grubDanceSquare.style.visibility = "visible";
}
