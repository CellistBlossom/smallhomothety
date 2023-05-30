var button = document.createElement("button");
button.innerHTML = "Meet your new friend!";

var certificate = document.getElementById("certificate");
certificate.appendChild(button);
button.id = "idk_your_id_here";

button.addEventListener("click", function() {
  var grubbynumber = Math.floor(Math.random() * 100);
  if (grubbynumber > 7) {
  var grubName = [
    'Gumbo',
    'Cholli',
    'Grubber',
    'Jen Jen',
    'Grubbin',
    'Grubbing',
    'Grublet',
    'Grubling',
    'Grub-in-the-Rough',
    'Grub-Tastic!',
    'Grubbing Around',
    'Grub-a-Doodle-Do',
    'Grub-a-Licious',
    'Grub\'s Grotto',
    'Grumble Grub',
    'Upside-Down Grub',
    'Grubberling',
    'Tunnel Grub',
    'Royal Grub',
    'Tootle',
    'Glitter',
    'Grub-Grub-Grumble',
    'Grub-with-Glee',
    'Grubby Groove Grub',
    'Grubster',
    'Grubnose',
    'Grumble',
    'Grumblethorn',
    'Grumbleweed',
    'Grumblewort',
    'Nimble',
    'Grumpshrimp',
    'Grumpty',
    'Grumptysnout',
    'Grumwyrm',
    'Grumpus',
    'Grounder',
    'Snaggle',
    'Wandering Grub',
    'Grubblegut the Gluttonous',
    'Chirp',
    'Glittersnaps',
    'Mordant the Ancient',
    'Grubby Little Grub',
    'Vengeful Spirit',
    'Grumpshrimp',
    'Jelly Grub',
    'Glow Grub',
    'Grubette',
    'Grubb',
    'Grubble',
    'Grubbly',
    'Grubberlin',
    'Grum',
    'Grumm',
    'Grumps',
    'Grumworm',
    'Mire',
    'Squirmy',
    'Curly',
    'Wiggles',
    'Gizmo',
    'Squirm',
    'Buzzy',
    'Scrunchy',
    'Squirmles',
    'Gloam',
    'Slitherwing',
    'Gritburger',
    'Gribbler',
    'Greepbuzz',
    'Three-Eye Grubshroom',
    'Mato Grub',
    'Spiny Wurm',
    'Thragg',
    'Ambrose',
    'Hushwing',
    'Necromancer',
    'Buzzsaw Grub',
    'Shadow Grub',
    'Glowing Grub',
    'DeepScale Grub',
    'Moss Grub',
    'Moss Matter',
    'Grub Sweeper',
    'Nibblebug',
    'Slime Galore',
    'Flop \'Em',
    'Dust Grub',
    'Needlemane',
    'King Grist',
    'The Molted Sentinel',
    'The Fargus Flycatcher',
    'Mantraphagus the Glutton',
    'Maggotcloud the Voracious',
    'Deepglide the Wriggler',
    'Queen Mantis Shade',
    'Grubguard the Thirsty',
    'Buzz-Wing',
    'Dustfly',
    'Muckoo',
    'Fungicle',
    'Squisk',
    'Soot Slug',
    'Silverhopper',
    'Shadow Flitter',
    'Greber the Grub',
    'Coggles the Crawler',
    'Snickle the Snurble',
    'Burbly the Snaffler',
    'Nibbs the Bug',
    'Orph the Nocto',
    'Clacco the Chirrup',
    'Squigzy the Goop',
    'Mothwing',
    'Needler',
    'Plush Bug',
    'Deep Grub',
    'Wire Bug',
    'Hive Knight',
    'Dawn Grub',
    'Glowing Snail',
    'Slumbercat',
    'Dream Grub',
    'Solon',
    'Lumafly',
    'Dustwing',
    'Mantisclaw',
    'Bristleback',
    'Prickly Pod',
    'Nail Grubble',
    'Neleb',
    'Gambril',
    'Entoza',
    'Meregol',
    'Lurker',
    'Gorgot',
    'Lapotch',
    'Slick',
    'Sludge Eel',
    'Lantern Grub',
    'Glowfly Grub',
    'Burrow Grub',
    'Gascoigne Grub',
    'Trappledoof',
    'Inkback',
    'Mawmaw',
    'Greyfur',
    'Hivebark',
    'Softmaker',
    'Nezzrazz',
    'Knightly Delight Grub',
    'Hollow Eel Grub',
    'Extrest Grub',
    'Chirping Grub',
    'Gripper Grub',
    'Willow Weevil',
    'Safe Creeper',
    'Lichen Hopper',
    'Pale Wriggler',
    'Gizzlaw',
    'Beeglob',
    'Mosstail',
    'Nibblesnout',
    'Scuttletail',
    'Whiskring',
    'Clawcrawler',
    'Sliverbug',
    'Vespa Grub',
    'Spiral Grub',
    'Burrower Grub',
    'Drifter Worm',
    'Spikeroot',
    'Grub Egg',
    'Nail Bug',
    'Pale Bearer',
    'Light Devourer',
    'Void Gazer',
    'Shade Lurker',
    'Shadeclaw',
    'Chirpee',
    'Duskwings',
    'Cinderpillar',
    'Nailbirb',
    'Grubboon',
    'Silksnail',
    'Seeker Grub',
    'Fire Dreamer',
    'Fury Sprout',
    'Mosskin',
    'Storm Crawler',
    'Charged Fat Grub',
    'Truffle Mite',
    'Tinkerfly',
    'Stalwart Grub',
    'Glowing Wriggler',
    'Buzzscuttle',
    'Nailclaw',
    'Wegsnar',
    'Shadow Shimmer',
    'Puru',
    'Mawlek',
    'Friggs',
    'Whitecap',
    'Blastfly',
    'Watchergleam',
    'Groggo',
    'Bogeeze',
    'Crestog',
    'Nodor',
    'Fracto',
    'Maggotry',
    'Flitt',
    'Buzzbuzz',
    'Skedaddle',
    'Clitch',
    'Molemite',
    'Wilkling',
    'Slurper',
    'Scuttler',
    'Chirper',
    'Buzzbug',
    'Narelle',
    'JourneyBite',
    'Needleworm',
    'Labyrinth Grub',
    'Spirit Grub',
    'Wisp Grub',
    'Bulb Grub',
    'Grub Hopper',
    'Sap Grub',
    'Grubberfly',
    'Consume-a-lot',
    'Grimmalle',
    'Plumombre',
    'Ossean',
    'Whimby',
    'Shelien',
    'Sroadign',
    'Huffleg',
    'Cardigole',
    'Slopper',
    'Quaggle',
    'Thistle Guard',
    'Silk Sensei',
    'Buzz Burr',
    'Heavy Shade',
    'Shadow Buzzer',
    'Rustwasp',
    'Hivekeeper',
    'Groob',
    'Swarmstone',
    'Fungusfly',
    'Slimeball',
    'Knitwisp',
    'Shadefly',
    'Fungmin',
    'Moon Hopper',
    'Markfruit-Grub',
    'Shadow-Grub',
    'Glintmoth-Grub',
    'Grit-Grub',
    'Scree-Grub',
    'Gloom-Grub',
    'Cinder-Grub',
    'Baelfly Princess',
    'Swarmlord',
    'Dusk Thief',
    'Oozy the Slime',
    'Eileen the Hungry',
    'Snibbob the Gluttonous',
    'Soul Grub',
    'Grimm Grub',
    'Skele Grub',
    'Buzzfuzz',
    'Jumpcale',
    'Wiggler',
    'Snapperfly',
    'Gruffa',
    'Watcher Knight',
    'Buzz One',
    'Shade Beast',
    'Phantom Spawn',
    'Mantis Lord',
    'Venomer',
    'Gravity Grub',
    'Scavenger Grub',
    'Luminary Grub',
    'Mender Grub',
    'Trailblazer Grub',
    'Viridian Grub',
    'Tanglebloom',
    'Hivelord',
    'Bloomguard',
    'Agitha',
    'Stingtail',
    'Mossbinder',
    'Stagmane',
    'Blueclaw Spitter',
    'Moldmarshal',
    'Supergrub',
    'Shellglider',
    'Buzzzelworm',
    'Fungey Shrubster',
    'Fungus-Lord',
    'Glibglop',
    'Glopling',
    'Goomok',
    'Grimmer',
    'Grogger',
    'Gropler',
    'Gutterfly',
    'Goobling',
    'Glooper',
    'Grubsey',
    'Viridescent Flytrap',
    'Moth Skitterling',
    'Nail Clipper',
    'Hotnest Grub',
    'Void Maze',
    'Grim Hornet',
    'Grave Wasp',
    'Shade Edge',
    'Spore Cloud',
    'Stingwing',
    'Scabblefly',
    'Clacksnout',
    'Stonejaw',
    'Needleshell',
    'Clinger Grub',
    'Nature Grub',
    'Nevermore Grub',
    'Mud Puff',
    'Loom Grub',
    'Dust Drake',
    'Grimfly',
    'Deep Wriggler',
    'Wild Grub',
    'Guardian Grub',
    'Char Grub',
    'Pillar Grub',
    'King Mould',
    'Viscount Chorus',
    'Garpede',
    'Mosquito',
    'Tummy Sprout',
    'Great Nailsage Sly',
    'Pandemite',
    'Earendel',
    'Shellback',
    'Belkite',
    'Churlbugg',
    'Wrigglar',
    'Buzzangler',
    'Cloth Wisp',
    'Grey Hunter',
    'Dirt Muncher',
    'Plated Clawsnail',
    'Hivebound Honey',
    'Fire Lashbug',
    'Grizzled Snoutworm',
    'Charred Slugsaw',
    'Fungal Emberfly',
    'Moth Tribe Shaman',
    'Grimmermite',
    'Wriggling Chap',
    'Muffle Wisp',
    'Gloomnip',
    'Chillcoat',
    'Sideslip',
    'Buzzbit',
    'Gleeble',
    'Crunchlette',
    'Shriek Bun',
    'Jumpfeather',
    'Desolation Moth',
    'Grubglider',
    'Bubblebug',
    'Honeycomb',
    'Dustmound',
    'Chubb Bug',
    'Shell Hopper',
    'Silk Gatherer',
    'Gallop Mudbug',
    'Redcap',
    'Stingbulb',
    'The Waking Shadow',
    'Mud Catterpillar',
    'Feathery Fritter',
    'Chalkgrub',
    'Moss Mound Munchkin',
    'Fungal Forager',
    'Bellowing Bog Beetle',
    'Cave Glow Cocoon',
    'Crystalline Crawler',
    'Stone Skimmer',
    'Wolf Knight',
    'Grub Knight',
    'Mite-Mite',
    'Chugga-Bug',
    'Grubcap',
    'Grubclaw',
    'Dirt Roo',
    'Wolfshell',
    'Birdfly',
    'Puffapod',
    'Violoid',
    'Chimera Grub',
    'Mothfly',
    'Crossroad-cruncher',
    'Deep-delver',
    'Gloam-gnawer',
    'Mist-muncher',
    'Hive-hopper',
    'Knocker-Noggin',
    'Acid Crawler',
    'Essence Eater',
    'Crimson Skitterling',
    'Clawkin',
    'Deepwing',
    'Chubwing',
    'Saltsquirm',
    'Grubblob',
    'Flukemstrum',
    'Fungoar',
    'Grimmite',
    'Nailshroom',
    'Churrworm',
    'Lumarok',
    'Chewi',
    'Wambus',
    'Chirpy',
    'Slyder',
    'Grubbun',
    'Nectar Eater',
    'Bumbleshell',
    'Fungoidsting',
    'Vivibulb',
    'Rustybug',
    'Swoofulk',
    'Shadechomp',
    'N4ll Beetle',
    'Snailer',
    'Fuzzer',
    'Blaze Salamander',
    'Fungal Wick',
    'Fungiface',
    'Mushroom Mage',
    'Cashew Cutter',
    'Glimmerfly Grove',
    'Grubspike',
    'Glowmaggot',
    'Crystallis',
    'Strisp',
    'Grubbersnout',
    'Nailwhirl',
    'Mosquibug',
    'Fungoid',
    'Scrobbler',
    'Staincrab',
    'Magmagrub',
    'Gust Grub',
    'Chillbumper',
    'Crawly',
    'Tadpink',
    'Gormaander',
    'Thin-Mud',
    'Moskit',
    'Glutterfly',
    'Skeetle',
    'Grobblefly',
    'Cuttletrunk',
    'Blitznab',
    'Grimburly',
    'Crispersnip',
    'Figgolem',
    'Buzzbeak',
    'Figglepop',
    'Fumtum',
    'Wrigglermoth',
    'Dirtmoss',
    'Charvee',
    'Spittlegrub',
    'Mushaboom',
    'Honey Hopper',
    'Glowwormshroom',
    'Grublus',
    'Gritlily',
    'Soulgazer',
    'Zote the Mighty',
    'Hooded Stranger',
    'Grealez',
    'Needloth',
    'Salubra Skulker',
    'Glooble',
    'The Splinter Grub',
    'Chittering Glider',
    'Puffcoil',
    'Gruzzer',
    'Slimemite',
    'Wingmutter',
    'Nailbuzzer',
    'Hivewing',
    'Shadowdancer',
    'Cinderbug',
    'Buzz Bugger',
    'Snicker Scuttler',
    'The Void Wing',
    'Chirruping Grub',
    'Larveaureon',
    'Wallworm',
    'Cybuggler',
    'Scarabug',
    'Grubwatcher',
    'Grubulisk',
    'Wiggly',
    'Fluffy',
    'Poppy',
    'Jiggly',
    'Fuzzy',
    'Twinkles',
    'Pinstripe',
    'Sunny',
    'Schnookie',
    'Hoppy',
    'Puddles',
    'Butters',
    'Tater',
    'Crumpet',
    'Cricket',
    'Daisy',
    'Buttercup',
    'Ripple',
    'Grubby',
    'Yapper',
    'Fidget',
    'Itchy',
    'Moth',
    'Whiskers',
    'Scamper',
    'Hops',
    'Jingle',
    'Buzzzz',
    'Jitter',
    'Wiggle',
    'Wriggle',
    'Sprout',
    'Twiggy',
    'Skipley',
    'Skippety',
    'Whimsy',
    'Peekaboo',
    'Tater Tot',
    'Squirty',
    'Slurpy',
    'Dozy',
    'Nibbler',
    'Poofy',
    'Dottie',
    'Floppy',
    'Loopy',
    'Mittens',
    'Miffy',
    'Chubbles',
    'Squiggly',
    'Herky',
    'Scamp',
    'Slipper',
    'Plump',
    'Buzz',
    'Perky',
    'Snuggle',
    'Patter',
    'Chipper',
    'Snuggles',
    'Stumpy',
    'Nibbles',
    'Chomper',
    'Squishy',
    'Grouchy',
    'Pupa',
    'Chewie',
    'Buzzitty',
    'Woogle',
    'Bumblebee',
    'Pebbles',
    'Twitchy',
    'Trot',
    'Pippin',
    'Poppet',
    'Doodle',
    'Bumbles',
    'Snibble',
    'Glossy',
    'Zap',
    'Fuzzkins',
    'Squiggle',
    'Buzzer',
    'Trotter',
    'Muncher',
    'Glimmer',
    'Glider',
    'Hopper',
    'Tiny',
    'Plodder',
    'Happy',
    'Skipper',
    'Sparky',
    'Snuggly',
    'Tubby',
    'Slither',
    'Flutter',
    'Squirt',
    'Squish-Munch',
    'Fuzzy-Puppy',
    'Snuggles-Wiggles',
    'Tippy-Toots',
    'Mr. Chomps',
    'Gizmo-Gobble',
    'Bumble-Beezy',
    'Tiny-Crawler',
    'Fluffy-Feathers',
    'Cutesy-Paws',
    'Quirkle',
    'Grubbles',
    'Rickle',
    'Speckle',
    'Nibble',
    'Scampers',
    'Gussel',
    'Scuttles',
    'Tickle',
    'Squeakums',
    'Wobbles',
    'Waltz',
    'GiggleBug',
    'Wormly',
    'Poko',
    'Fuzzball',
    'Jellie',
    'Curley',
    'Wigglez',
    'Bulby',
    'Pippa',
    'Bun Bun Grub',
    'Stubby Grub',
    'Grub Sluggard',
    'Cutie Pie Grub',
    'Gooey Grub',
    'Gummy Grub',
    'Wiggly Grub',
    'Grumpy Grubkin',
    'Prickly Grubbee',
    'Sploshy Grub',
    'Groovin\' Grubby',
    'Cosy Grubbinator',
    'Grubby Dizzy-Goo',
    'Slick Grubster',
    'Pancake Grub',
    'Chunky Grubbles',
    'Chunky Grubby',
    'Grubble Mc Grubberson',
    'Flufftastic Grub',
    'Smiley Grub',
    'Snuggy Grub',
    'Grubbily-Goo',
    'Groovy Grub',
    'Bubbalou Grub',
    'Grubbleworm',
    'Grubby Friend',
    'Wiggle n\' Jiggle',
    'Pupperoni',
    'Hug-A-Bug',
    'Grubbin Huggins',
    'Grub Blubb',
    'Bobble Grub',
    'Squirm Blurm',
    'Tumbly Bubbly',
    'Chub-Chub',
    'Fuzzy Nubble',
    'Grumblebee',
    'Grubkin',
    'Gribby',
    'Grubbydoodle',
    'Grubby-Wubby-Do',
    'Chubby Cheeks Grub',
    'Perplexed Grub',
    'Refurbished Grub',
    'Honeycomb Grub',
    'Convenient Grub',
    'The Greasy Grub',
    'Buzzy Bee',
    'Fuzzy Wuzzy Grub',
    'Scrubby',
    'Giggles',
    'Doodle Bug',
    'Jitterbug',
    'Squish',
    'Grubberoo',
    'Buzzby',
    'Curly Q',
    'Wigglesworth',
    'Hipper',
    'Tart',
    'Fifi the Friendly Grub',
    'Wiggles the Wiggly Grub',
    'Joltin\' Grub',
    'Buzzy the Bzzing Grub',
    'Curly the Curlicue Grub',
    'Snoozy Grub',
    'Millie the Milling Grub',
    'Grubbers the Grubbing Grub',
    'Wingy the Winged Grub',
    'Chompy the Chomping Grub'
    ];

  document.getElementById("grubname").innerHTML = grubName[Math.floor((Math.random() * 713.99))];

  var grubPronoun = [
    'she/her',
    'she/her',
    'she/her',
    'she/her',
    'she/her',
    'he/him',
    'he/him',
    'he/him',
    'he/him',
    'he/him',
    'they/them',
    'they/them',
    'they/them',
    'they/them',
    'they/them',
    'fae/faer',
    'xe/xem',
    'it/its'
  ];
  document.getElementById("pronouns").innerHTML = grubPronoun[Math.floor((Math.random() * 17.99))];

  var grubFood = [
    'Parsley',
    'Carrot',
    'Fennel',
    'Rue',
    'Dill',
    'Parsnip',
    'Culantro',
    'Coriander',
    'Chervil',
    'Celery',
    'Magnolia',
    'Olive',
    'Roses Petals',
    'Rose Leaves',
    'Laurel',
    'Sweet Orange Leaves',
    'Lemon Leaves',
    'Apple Tree Leaves',
    'Virginia snakeroot',
    'Birthwort Vines',
    'Dutchman’s pipe',
    'Woolly Pawpaw',
    'Bigflower Pawpaw',
    'Smallflower Pawpaw',
    'Dwarf Pawpaw',
    'Netted Pawpaw',
    'Sea Torchwood',
    'Wild Lime',
    'Common Hoptree',
    'Tangerine Leaves',
    'Milkweed',
    'Grapefruit Leaves',
    'Queen Anne’s Lace',
    'Golden Alexander',
    'Anise',
    'Prickly ash',
    'Spicebush',
    'Sassafras',
    'Pipevine',
    'Lilac',
    'Willow',
    'Birch',
    'Tuliptree',
    'Cherry trees',
    'Plum trees',
    'Apple trees',
    'Violets',
    'Pansies',
    'Passionflowers',
    'Plantains',
    'Nettle',
    'Azalea',
    'Mallow',
    'Thistle',
    'Daisies',
    'Snapdragon',
    'Aster',
    'Strawberry',
    'Mint',
    'Clover',
    'Cabbage'
  ];

  document.getElementById("food").innerHTML = grubFood[Math.floor((Math.random() * 60.99))];

  var grubPersonality = [
    'Curious',
    'Persistent',
    'Brave',
    'Explorer',
    'Playful',
    'Shy',
    'Tenacious',
    'Patient',
    'Adaptable',
    'Resourceful',
    'Determined',
    'Inquisitive',
    'Discerning',
    'Independent',
    'Detail-oriented',
    'Focused',
    'Loyal',
    'Patient',
    'Sensitive',
    'Sociable',
    'Optimistic',
    'Trusting',
    'Tireless'
  ];

  document.getElementById("personality").innerHTML = grubPersonality[Math.floor((Math.random() * 22.99))];

  document.getElementById("namelabel").innerHTML = 'Your grub\'s name is...';
  var pronoun = "";
  if (document.getElementById("pronouns").innerHTML == "he/him") {
    pronoun = "His";
  } else if (document.getElementById("pronouns").innerHTML == "she/her") {
    pronoun = "Her";
  } else if (document.getElementById("pronouns").innerHTML == "they/them") {
    pronoun = "Their";
  } else if (document.getElementById("pronouns").innerHTML == "fae/faer") {
    pronoun = "Faer";
  } else if (document.getElementById("pronouns").innerHTML == "xe/xem") {
    pronoun = "Xir";
  } else if (document.getElementById("pronouns").innerHTML == "it/its") {
    pronoun = "Its";
  }

  var pronoun2 = "";
  if (document.getElementById("pronouns").innerHTML == "he/him") {
    pronoun2 = "him";
  } else if (document.getElementById("pronouns").innerHTML == "she/her") {
    pronoun2 = "her";
  } else if (document.getElementById("pronouns").innerHTML == "they/them") {
    pronoun2 = "them";
  } else if (document.getElementById("pronouns").innerHTML == "fae/faer") {
    pronoun2 = "faer";
  } else if (document.getElementById("pronouns").innerHTML == "xe/xem") {
    pronoun2 = "xem";
  } else if (document.getElementById("pronouns").innerHTML == "it/its") {
    pronoun2 = "it";
  }
  document.getElementById("pronounlabel").innerHTML = pronoun + ' pronouns are...';
  document.getElementById("foodlabel").innerHTML = pronoun + ' favorite food is...';
  document.getElementById("personalitylabel").innerHTML = pronoun + ' personality type is...';
  document.getElementById("congrats").innerHTML = 'Congratulations on making a new friend! Please make sure to take good care of '  + pronoun2 + ".";
  document.getElementById("grubbyimage").innerHTML = '<img src="images/grubby.png" alt="A grub!" height="100px" width="100px">';

  button.innerHTML = "Make another friend!";
}

else {
  var mimicName = [
    'Jubilant Grobbler',
    'Mandible Mish-mash',
    'Nibble Scuttle',
    'Oily Grubble',
    'Buzzing Bimble',
    'Funky Chompster',
    'Gummy Nibbler',
    'Gabble Glutton',
    'Smack Snack',
    'Ledger Lunger',
    'Gristly Grawl',
    'Munch Monster',
    'Junk Muddle',
    'Mining Masticator',
    'Smiggy Gnawer',
    'Clomping Chomper',
    'Gurgle Gulper',
    'Scrap Sniggerer',
    'Pick Pincher',
    'Chikkin Cringer'
];
    document.getElementById("grubname").innerHTML = mimicName[Math.floor((Math.random() * 19.99))];

    var mimicPronoun = [
      'she/her',
      'she/her',
      'she/her',
      'she/her',
      'she/her',
      'he/him',
      'he/him',
      'he/him',
      'he/him',
      'he/him',
      'they/them',
      'they/them',
      'they/them',
      'they/them',
      'they/them',
      'fae/faer',
      'xe/xem',
      'it/its'
    ];
    document.getElementById("pronouns").innerHTML = mimicPronoun[Math.floor((Math.random() * 17.99))];

    var mimicFood = [
      'Grub Fries',
      'Grub Rice',
      'Grub Crepes',
      'Grub Noodle Bowl',
      'Grub Pizza',
      'Grub Grilled Cheese',
      'Grub Fish and Chips',
      'Grub Fried Chicken',
      'Dusty Bun',
      'Flukefin Soup',
      'Violet Confit',
      'Grubhoney',
      'Grub Cake',
      'Mosskin Egg',
      'Glowing Egg',
      'Great Slashshroom',
      'Nail Bat Spore',
      'Spectral Core',
      'Fey Moth Egg',
      'Glowing Wort',
      'Heavenly Bulb',
      'Blistermoss',
      'Yowlsect Eggs',
      'Ruptureroot',
      'Matozaure Egg',
      'Shadow Orb',
      'Hive Cluster',
      'Void Spore',
      'Pale Cyst',
      'Flukemarm Egg'
    ];

    document.getElementById("food").innerHTML = mimicFood[Math.floor((Math.random() * 29.99))];

    var mimicPersonality = [
      'Cunning',
      'Resourceful',
      'Socially Savvy',
      'Charismatic',
      'Articulate',
      'Adaptable',
      'Observant',
      'Opportunistic',
      'Clever',
      'Tireless',
      'Patient',
      'Ambitious',
      'Intelligent',
      'Mystical',
      'Humorous',
      'Stealthy',
      'Self-Reliant',
      'Altruistic',
      'Diligent',
      'Imaginative',
      'Inquisitive'
    ];

    document.getElementById("personality").innerHTML = mimicPersonality[Math.floor((Math.random() * 20.99))];

  document.getElementById("namelabel").innerHTML = 'Your "grub\'s" name is...';
  var pronoun = "";
  if (document.getElementById("pronouns").innerHTML == "he/him") {
    pronoun = "His";
  } else if (document.getElementById("pronouns").innerHTML == "she/her") {
    pronoun = "Her";
  } else if (document.getElementById("pronouns").innerHTML == "they/them") {
    pronoun = "Their";
  } else if (document.getElementById("pronouns").innerHTML == "fae/faer") {
    pronoun = "Faer";
  } else if (document.getElementById("pronouns").innerHTML == "xe/xem") {
    pronoun = "Xir";
  } else if (document.getElementById("pronouns").innerHTML == "it/its") {
    pronoun = "Its";
  }

  var pronoun2 = "";
  if (document.getElementById("pronouns").innerHTML == "he/him") {
    pronoun2 = "him";
  } else if (document.getElementById("pronouns").innerHTML == "she/her") {
    pronoun2 = "her";
  } else if (document.getElementById("pronouns").innerHTML == "they/them") {
    pronoun2 = "them";
  } else if (document.getElementById("pronouns").innerHTML == "fae/faer") {
    pronoun2 = "faer";
  } else if (document.getElementById("pronouns").innerHTML == "xe/xem") {
    pronoun2 = "xem";
  } else if (document.getElementById("pronouns").innerHTML == "it/its") {
    pronoun2 = "it";
  }
  document.getElementById("pronounlabel").innerHTML = pronoun + ' pronouns are...';
  document.getElementById("foodlabel").innerHTML = pronoun + ' favorite food is...';
  document.getElementById("personalitylabel").innerHTML = pronoun + ' personality type is...';
  document.getElementById("congrats").innerHTML = 'Congratulations on making a new friend! Please make sure to take good care of '  + pronoun2 + ".";
  document.getElementById("grubbyimage").innerHTML = '<img src="images/mimic.png" alt="A mimic!" height="100px" width="100px">';

  button.innerHTML = "Make another friend!";
}
});