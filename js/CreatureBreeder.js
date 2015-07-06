var creatures = [];

var currentFather = null;
var currentMother = null;

var EfirstNames = ['Apple', 'Apple', 'Apple', 'Apple', 'Pinkie', 'Aloe', 'Cherry', 'Coco', 'Goldie', 'June', 'Lotus', 'Roma', 'Tree', 'Cheese', 'Carrot', 'Silver', 'Gold', 'Maud', 'Lavender', 'Peachy', 'Butter', 'Candy', 'Coral', 'Daisy', 'Grape', 'Lucky', 'Oakey', 'Octavia', 'Ace', 'Fuzzy'];
var PfirstNames = ['Flutter', 'Rainbow', 'Lucky', 'Clear', 'Cloud', 'Daring', 'Derpy', 'Ditzy', 'Flash', 'Fluffy', 'Hoops', 'Stellar', 'Soar', 'Spit', 'High', 'Lightning', 'Silver', 'Wave', 'Fast', 'Star', 'Storm', 'Thunder', 'Buddy', 'Jet', 'Prism', 'Fleet', 'Pegasus', 'Rainbow'];
var UfirstNames = ['Rarity', 'Twilight', 'Fancy', 'Fleur', 'Flim', 'Moon', 'Shining', 'Starlight', 'Sunset', 'Trixie', 'Night', 'Amethyst', 'Arpeggio', 'Bright', 'Cipher', 'Comet', 'Crystal', 'Infinity', 'Neon', 'Precious', 'Royal', 'Star', 'Twinkle', 'Top', 'DJ'];

var ElastNames  = ['Jack', 'Pie', 'Pie', 'Jubilee', 'Delicious', 'Smith', 'Blossom', 'Mare', 'Song', 'Sandwich', 'Diamond', 'Cake', 'Shill', 'Cider', 'Leaves', 'Orange', 'Sweet', 'Rock', 'Cap', 'Flower', 'Bloom', 'Harvest', 'Valley', 'Drops'];
var PlastNames  = ['Shy', 'Dash', 'Laurels', 'Skies', 'Chaser', 'Glider', 'Streak', 'Chill', 'Dust', 'Wind', 'Strike', 'Drop', 'Swoop', 'Hunter', 'Burst', 'Feather', 'Lane', 'Shot', 'Cloud', 'Clouds', 'Star', 'Break', 'Swirl', 'Falls', 'Spirits', 'Rays', 'Stream', 'Gale', 'Lights', 'Wing', 'Dancer'];
var UlastNames  = ['Sparkle', 'Dis Lee', 'Lulamoon', 'Song', 'Dancer', 'Armor', 'Glimmer', 'Shimmer', 'Velvet', 'Light', 'Star', 'Moon', 'Bulb', 'Sun', 'Tail', 'Coronet', 'Gem', 'Shade', 'Ribbon', 'Swirl', 'Bright', 'Dream', 'Dreams', 'Shine', 'Gala', 'Fare'];


$(document).ready(function() {
  

  creatures.push(new creature("Celestia","#FDF8FE", "EU", "N/A"));
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
  creatures.push(new creature("Luna","#404680", "EP", "N/A"));
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
});


function createNewDiv (input, index) {
  
  var newDiv = document.createElement('div');
  newDiv.id = index;
  newDiv.className = 'creatureDiv';
  /* newDiv.style.color = $.xcolor.complementary(input.colour); */
  newDiv.style.borderColor = $.xcolor.darken($.xcolor.complementary(input.colour));
  document.body.appendChild(newDiv);
  
  var heading = document.createElement("H2");
  var nmeTxt = document.createTextNode(input.name);
  heading.appendChild(nmeTxt);
  newDiv.appendChild(heading);
  
  var pictureBack = document.createElement('div');
  pictureBack.style.backgroundColor = input.colour;
  pictureBack.style.height = '191px';
  var picture = document.createElement('object');
  picture.data = 'images/ponyBodyExEyes.svg';
  picture.className = 'ponyPic';
  pictureBack.appendChild(picture);
  if (findSpecies(input.species) == "U") {
    var horn = document.createElement('object');
    horn.data = 'images/horn.svg';
    horn.className = 'ponyPic';
    horn.style.bottom = '198px';
    pictureBack.appendChild(horn);
  }
  if (findSpecies(input.species) == "P") {
    var wing = document.createElement('object');
    wing.data = 'images/wing.svg';
    wing.className = 'ponyPic';
    wing.style.bottom = '198px';
    pictureBack.appendChild(wing);
  }
  newDiv.appendChild(pictureBack);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var btn = document.createElement('BUTTON');
  btn.style.position = 'relative';
  btn.style.top = '0px';
  newDiv.appendChild(btn);
  var btnTxt = document.createTextNode("Breed");
  btn.appendChild(btnTxt);

  
  btn.onclick = function() {
    if (currentFather == null) {
      currentFather = newDiv.id;
    } else {
      currentMother = newDiv.id;
      Breed(currentFather, currentMother);
      currentMother = null;
      currentFather = null;
    }
  }
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var speciesTxt = document.createTextNode("Species: " + findSpecies(input.species));
  newDiv.appendChild(speciesTxt);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var speciesTxt = document.createTextNode("Species Alleles: " + input.species);
  newDiv.appendChild(speciesTxt);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var parentsTxt = document.createTextNode("Parents: " + input.parents);
  newDiv.appendChild(parentsTxt);
  
}

function Breed (father, mother) {
    
  var newColour = $.xcolor.breed(creatures[mother].colour, creatures[father].colour);
  
  var alleleRandom = Math.floor(Math.random() * 4);
  switch (alleleRandom) {
    case 0:
      var newSpecies = creatures[mother].species.charAt(0) + creatures[father].species.charAt(0);
      break;
    case 1:
      var newSpecies = creatures[mother].species.charAt(0) + creatures[father].species.charAt(1);
      break;
    case 2:
      var newSpecies = creatures[mother].species.charAt(1) + creatures[father].species.charAt(0);
      break;
    case 3:
      var newSpecies = creatures[mother].species.charAt(1) + creatures[father].species.charAt(1);
      break;

  }
  
  switch (findSpecies(newSpecies)) {
    case "E":
      var newName = EfirstNames[Math.floor(Math.random() * EfirstNames.length)] + " " + ElastNames[Math.floor(Math.random() * ElastNames.length)];
      break;
    case "P":
      var newName = PfirstNames[Math.floor(Math.random() * PfirstNames.length)] + " " + PlastNames[Math.floor(Math.random() * PlastNames.length)];
      break;
    case "U":
      var newName = UfirstNames[Math.floor(Math.random() * UfirstNames.length)] + " " + UlastNames[Math.floor(Math.random() * UlastNames.length)];
      break;
  }
  
  var newParents = creatures[mother].name + " + " + creatures[father].name;
  
  creatures.push(new creature(newName, newColour, newSpecies, newParents));
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
}

function findSpecies (input) {
  
  if (input.indexOf("E") != -1) {
    return "E";
  } else if (input.indexOf("P") == -1) {
    return "U";
  } else if (input.indexOf("U") == -1) {
    return "P";
  } else if (input.indexOf("P") < input.indexOf("U")) {
    return "P";
  } else if (input.indexOf("U") < input.indexOf("P")) {
    return "U";
  }
  
}


function creature (name, colour, species, parents) {
  this.name = name;
  this.colour = colour;
  this.species = species;
  this.parents = parents;  
}