var button = document.createElement("button");
button.innerHTML = "Give me a random format!";

var generator = document.getElementById("generator");
generator.appendChild(button);
button.id = "idk_your_id_here";

const WINCONS = [
    "Lockout",
    "Lockout",
    "Lockout",
    "Lockout",
    "Lockout",
    "4 Line",
    "3 Line",
    "3 Line",
    "3 Line",
    "3 Line",
    "2 Line",
    "Blackout",
    "Blackout",
    "Blackout",
    "Blockout",
    "Blockout",
    "Non-Lockout Pattern",
    "Fraction",
    "Wingy",
    "Inverted 3 Line",
    "12gy"
];
const ALT_WINCONS = [
    "Board Art",
    "Bingyguessr",
    "Overworld-Godhome Co-Op",
    "Gambling",
    "Unbench",
    "Area Blitz"
];
const VARIANTS = [
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "Hand/Brain",
    "1 Brain 2 Hands",
    "Intrusive Thoughts",
    "2v2",
    "3v3",
    "ATC",
    "RGO",
    "Bing of the Hill",
    "Pictionary",
    "Yes/No",
    "Up/Down/Left/Right",
    "Bingy Bingy",
    "Divorce",
    "Singy",
    "Lingy",
    "Reverse Lingy",
    "Blind",
    "Crossover"
];
const TWISTS = [
    "Create a custom profile tailored for your preferred experience. This might be a dive-focused board, only bosses, all skills, dream nail focused, etc.",
    "Generate a godhome board but start in King's Pass",
    "Spend 0 geo",
    "Don't enter city",
    "Don't obtain dive",
    "Get the lowest % completion possible",
    "Get the highest % completion possible without marking any goals on the board",
    "Don't obtain dash",
    "Don't obtain claw",
    "Use the colosseum to complete goals",
    "Use NMMS glitches",
    "Enable HKMP pvp",
    "Run different boards",
    "Choose/draft lines/goals before revealing the board",
    "Finish one line entirely before starting another",
    "Include extended diagonals (wrap around from r1c4->r2c5->r3c1)",
    "Use a seeded board where the seed represents something (today's date, your birthday, etc)",
    "Run a vanilla board on a rando save or vice versa",
    "Use a 13x13 board",
    "Play in Steel Soul mode",
    "Play in Glass Soul mode (You are permanently at 1 mask)"
];

button.addEventListener("click", function () {
    var format = "";
    var wincon = "";
    var variant = "";
    var twist = "";

    if (Math.random() > .8) {
        wincon = ALT_WINCONS[Math.floor((Math.random() * ALT_WINCONS.length))];
    } else {
        wincon = WINCONS[Math.floor((Math.random() * WINCONS.length))];
        if (Math.random() > .5) {
            variant = VARIANTS[Math.floor((Math.random() * VARIANTS.length))] + " ";
        }
        if (Math.random() > .95) {
            twist = ", but... " + TWISTS[Math.floor((Math.random() * TWISTS.length))];
        }
    }
    format = variant + wincon + twist;
    document.getElementById("format").innerHTML = format;
});