var creatures = [];

var currentFather = null;
var currentMother = null;

var EfirstNames = ['Apple', 'Apple', 'Apple', 'Apple', 'Pinkie', 'Aloe', 'Cherry', 'Coco', 'Goldie', 'June', 'Lotus', 'Roma', 'Tree', 'Cheese', 'Carrot', 'Silver', 'Gold', 'Maud', 'Lavender', 'Peachy', 'Butter', 'Candy', 'Coral', 'Daisy', 'Grape', 'Lucky', 'Oakey', 'Octavia', 'Ace', 'Fuzzy', 'Sunflower', 'Petal', 'Kat', 'Biscuit', 'Gaia', 'Cookie', 'Chip', 'Blossom', 'Cinnamon', 'Hazel', 'Vixen', 'Sugar', 'Bluebell', 'Clover', 'Peony', 'Butter', 'Flora','Berry',];
var PfirstNames = ['Flutter', 'Rainbow', 'Lucky', 'Clear', 'Cloud', 'Daring', 'Derpy', 'Ditzy', 'Flash', 'Fluffy', 'Hoops', 'Stellar', 'Soar', 'Spit', 'High', 'Lightning', 'Silver', 'Wave', 'Fast', 'Star', 'Storm', 'Thunder', 'Buddy', 'Jet', 'Prism', 'Fleet', 'Pegasus', 'Rainbow', 'Flare', 'Blizzard', 'Dust', 'Frost', 'Misty', 'Radar', 'Sea', 'Zigzag', 'Lexa', 'Atlas', 'Titan', 'Turbo', 'Draco', 'Scorpio', 'Saphira', 'Spyro', 'Rogue', 'Thorn',];
var UfirstNames = ['Rarity', 'Twilight', 'Fancy', 'Fleur', 'Flim', 'Flam', 'Moon', 'Shining', 'Starlight', 'Sunset', 'Trixie', 'Night', 'Amethyst', 'Arpeggio', 'Bright', 'Cipher', 'Comet', 'Crystal', 'Infinity', 'Neon', 'Precious', 'Royal', 'Star', 'Twinkle', 'Top', 'DJ', 'Aurora', 'Nebula', 'Umbra', 'Glaze', 'Nova', 'Dawn', 'Astra', 'Mystic',];

var ElastNames  = ['Jack', 'Pie', 'Pie', 'Jubilee', 'Delicious', 'Smith', 'Blossom', 'Mare', 'Song', 'Sandwich', 'Diamond', 'Cake', 'Shill', 'Cider', 'Leaves', 'Orange', 'Sweet', 'Rock', 'Cap', 'Flower', 'Bloom', 'Harvest', 'Valley', 'Drops', 'Chip', 'Roll', 'Almond', 'Chestnut', 'Honey', 'Lemon', 'Meadow', 'Muffin',];
var PlastNames  = ['Shy', 'Dash', 'Laurels', 'Skies', 'Chaser', 'Glider', 'Streak', 'Chill', 'Dust', 'Wind', 'Strike', 'Drop', 'Swoop', 'Hunter', 'Burst', 'Feather', 'Lane', 'Shot', 'Cloud', 'Clouds', 'Star', 'Break', 'Swirl', 'Falls', 'Spirits', 'Rays', 'Stream', 'Gale', 'Lights', 'Wing', 'Dancer', 'Breeze', 'Rocket', 'Sunset',];
var UlastNames  = ['Sparkle', 'Dis Lee', 'Lulamoon', 'Song', 'Dancer', 'Armor', 'Glimmer', 'Shimmer', 'Velvet', 'Light', 'Star', 'Moon', 'Bulb', 'Sun', 'Tail', 'Coronet', 'Gem', 'Shade', 'Ribbon', 'Swirl', 'Bright', 'Dream', 'Dreams', 'Shine', 'Gala', 'Fare', 'Equinox', 'Dawn', 'Opal', 'Topaz', 'Aura',];

var ETalents = ['Baking', 'Party planning', 'Orchard management', 'Jam-making', 'Performing music', 'Mining', 'Rock farming', 'Farming', 'Spa coordinator', 'Receptionist', ];
var PTalents = ['Formation flying', 'Weather control', 'Weather creation', 'Snowflake decorating', ];
var UTalents = ['Dress making', 'Fashion', 'Library management', 'Institutional management', 'Performing music', ];

var atmosphericHappiness = 0;



$(document).ready(function() {
  
  var customBtn = document.createElement('BUTTON');
  customBtn.style.float = 'left';
  customBtn.style.margin = '2px';
  customBtn.onclick = customPony;
  document.getElementById("header").appendChild(customBtn);
  
  var customBtnTxt = document.createTextNode("Custom Pony Creator");
  customBtn.appendChild(customBtnTxt);
  
  var helpBtn = document.createElement('BUTTON');
  helpBtn.style.float = 'left';
  helpBtn.style.margin = '2px';
  helpBtn.onclick = function() { window.open('help/help.pdf'); } 
  document.getElementById("header").appendChild(helpBtn);
  
  var helpBtnTxt = document.createTextNode("Help");
  helpBtn.appendChild(helpBtnTxt);
  
  var atmosphericHappinessTxt = document.createTextNode("Atmospheric Happiness: " + atmosphericHappiness);
  var atmosphericHappinessTxtDiv = document.createElement('div');
  atmosphericHappinessTxtDiv.style.float = 'right';
  atmosphericHappinessTxtDiv.style.margin = '2px';
  atmosphericHappinessTxtDiv.appendChild(atmosphericHappinessTxt);
  document.getElementById("header").appendChild(atmosphericHappinessTxtDiv);
  
  setInterval(function(){
    atmosphericHappinessTxt.nodeValue = "Atmospheric Happiness: " + atmosphericHappiness;
  }, 1000);
  
  
  ponyWantedGenerator();
  
  
  creatures.push(new creature("Celestia","#FDF8FE", "Eu", "N/A", 1.2, 'Raising the sun'));
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
  creatures.push(new creature("Luna","#404680", "Ep", "N/A", 1.2, 'Raising the moon'));
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
    
});

  var ponyWantedColour;
  var ponyWantedSpecies;

function ponyWantedGenerator() {
    
  newPonyWanted();
     
  var ponyWantedBtn = document.createElement('BUTTON');
  ponyWantedBtn.id = "ponyWantedBtn";
  ponyWantedBtn.style.float = 'right';
  ponyWantedBtn.style.margin = '2px';
  ponyWantedBtn.onclick = function() {$("#ponyWantedDiv").toggle();}
  document.getElementById("header").appendChild(ponyWantedBtn);
  var ponyWantedBtnTxt = document.createTextNode("Pony Wanted");
  ponyWantedBtn.appendChild(ponyWantedBtnTxt);
  
  
  var ponyWantedDiv = document.createElement('div');
  ponyWantedDiv.id = 'ponyWantedDiv';
  ponyWantedDiv.className = 'ponyWantedDiv';
  ponyWantedDiv.style.float = 'right';
  ponyWantedDiv.style.margin = '2px';
  
  var ponyWantedTxt = document.createTextNode("Pony Wanted: ");
  var ponyWantedTxts = ["Pony Wanted: ", "pls make my OC: ", "I request a specific pony: ", "Pony Required: "];
  ponyWantedTxt.nodeValue = ponyWantedTxts[Math.floor(Math.random() * ponyWantedTxts.length)]; 
  ponyWantedDiv.appendChild(ponyWantedTxt);
  
  var br = document.createElement('br');
  ponyWantedDiv.appendChild(br);
  var br = document.createElement('br');
  ponyWantedDiv.appendChild(br);
  
  var ponyWantedColourTxt = document.createTextNode("Colour: " + ponyWantedColour);
  ponyWantedDiv.appendChild(ponyWantedColourTxt);
  
  var br = document.createElement('br');
  ponyWantedDiv.appendChild(br);
  
  var ponyWantedSpeciesTxt = document.createTextNode("Species: " + ponyWantedSpecies);
  ponyWantedDiv.appendChild(ponyWantedSpeciesTxt);
  
  var br = document.createElement('br');
  ponyWantedDiv.appendChild(br);
  var br = document.createElement('br');
  ponyWantedDiv.appendChild(br);
  
  var ponyWantedRewardTxt = document.createTextNode("Reward: 1000 Atmospheric Happiness");
  ponyWantedDiv.appendChild(ponyWantedRewardTxt);
  
  var discardBtn = document.createElement('BUTTON');
  discardBtn.style.float = "right";
  ponyWantedDiv.appendChild(discardBtn);
  var discardBtnTxt = document.createTextNode("Discard");
  discardBtn.appendChild(discardBtnTxt);  
  
  discardBtn.onclick = function() {
    updatePonyWanted();
  }
  
  document.getElementById("header").appendChild(ponyWantedDiv);
  
  function newPonyWanted () {
    
    ponyWantedColour = ntc.names[Math.floor(Math.random() * ntc.names.length)][1];
    var ponyWantedSpeciesRandom = Math.floor(Math.random() * 3);
    switch (ponyWantedSpeciesRandom) {
      case 0:
        ponyWantedSpecies = "E";
        break;
      case 1:
        ponyWantedSpecies = "P";
        break;
      case 2:
        ponyWantedSpecies = "U";
        break;
    }
  }
  
  function updatePonyWanted(){
    newPonyWanted();
    
    ponyWantedTxt.nodeValue = ponyWantedTxts[Math.floor(Math.random() * ponyWantedTxts.length)]; 
    ponyWantedColourTxt.nodeValue = "Colour: " + ponyWantedColour;
    ponyWantedSpeciesTxt.nodeValue = "Species: " + ponyWantedSpecies;
  }
  
}


function createNewDiv (input, index) {
  
  var newDiv = document.createElement('div');
  newDiv.id = index;
  newDiv.className = 'creatureDiv';
  newDiv.style.textShadow = "0px 0px 25px" + $.xcolor.complementary(input.colour);
  newDiv.style.borderColor = $.xcolor.darken($.xcolor.complementary(input.colour));
  document.body.appendChild(newDiv);
  
  var top = document.createElement('BUTTON');
  top.style.float = "left";
  newDiv.appendChild(top);
  var topTxt = document.createTextNode("T");
  top.appendChild(topTxt);
  
  top.onclick = function() {
    document.body.insertBefore(newDiv, document.body.childNodes[0]);
  }
  
  var cross = document.createElement('BUTTON');
  cross.style.float = "right";
  newDiv.appendChild(cross);
  var deleteTxt = document.createTextNode("X");
  cross.appendChild(deleteTxt);
  
  cross.onclick = function() {
    if (input.name != "Celestia") {
      document.body.removeChild(newDiv);
      //creatures.splice(newDiv.id);
    } else {
      window.open('http://mlp.wikia.com/wiki/Princess_Celestia');
    }
  }
  
  var heading = document.createElement("H2");
  var nmeTxt = document.createTextNode(input.name);
  heading.appendChild(nmeTxt);
  newDiv.appendChild(heading);
  
  var pictureBack = document.createElement('div');
  pictureBack.style.backgroundColor = input.colour;
  pictureBack.style.height = '191px';
  pictureBack.style.position = 'relative';
  pictureBack.style.bottom = '10px';
  
  var picture = document.createElement('object');
  if (input.name == "Celestia" || input.name == "Luna") {
    picture.data = 'images/alicorn.svg';
  } else if (findSpecies(input.species) == "E") {
    picture.data = 'images/ponyBodyExEyes.svg';
  } else if (findSpecies(input.species) == "U") {
    picture.data = 'images/horn.svg';
  } else if (findSpecies(input.species) == "P") {
    picture.data = 'images/wing.svg';
  }
  picture.className = 'ponyPic';
  pictureBack.appendChild(picture);
  newDiv.appendChild(pictureBack);
  
  
  var btn = document.createElement('BUTTON');
  btn.style.position = 'relative';
  btn.style.top = '0px';
  newDiv.appendChild(btn);
  var btnTxt = document.createTextNode("Breed");
  btn.appendChild(btnTxt);

  btn.onclick = function() {
    if (currentFather == null) {
      currentFather = newDiv.id;
      newDiv.style.color = "#f7ff00";
    } else {
      currentMother = newDiv.id;
      if (currentMother != currentFather) {
        if (happiness >= 50){
          Breed(currentFather, currentMother);
          happiness += -50;
          happinessTxt.nodeValue = "Happiness: " + happiness;
        } else {alert("The second pony you click has to have 50 happiness to lose for breeding to work!")}
      }
      currentMother = null;
      currentFather = null;
      $(".creatureDiv").each(function(i) {
        $(this).css("color", "initial")
      });  
    }
  }
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
    
  var petBtn = document.createElement('BUTTON');
  newDiv.appendChild(petBtn);
  var petBtnTxt = document.createTextNode("Pet");
  petBtn.appendChild(petBtnTxt);

  petBtn.onclick = function() {
    if (happiness < 100) {
      happiness += 5;    
      happinessTxt.nodeValue = "Happiness: " + happiness;
    }
  }
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var happiness = 0;
  var happinessTxt = document.createTextNode("Happiness: " + happiness);
  setInterval(function(){
    if (happiness < 50) {
      happiness += 1;
      happinessTxt.nodeValue = "Happiness: " + happiness;
    }
    if (happiness > 50) {
      happiness += -1;
      happinessTxt.nodeValue = "Happiness: " + happiness;
      atmosphericHappiness += 1;
    }
  }, 1000);
  newDiv.appendChild(happinessTxt);
  
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  if (input.name == "Celestia" || input.name == "Luna") {
    var speciesTxt = document.createTextNode("Species: " + "Alicorn");   
  } else {
    switch (findSpecies(input.species)) {
        case "E":
          var speciesTxt = document.createTextNode("Species: " + "Earth Pony");
          break;
        case "P":
          var speciesTxt = document.createTextNode("Species: " + "Pegasus");
          break;
        case "U":
          var speciesTxt = document.createTextNode("Species: " + "Unicorn");
          break;
      }
  }
  newDiv.appendChild(speciesTxt);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  if (input.name == "Celestia") {
    var colourTxt = document.createTextNode("Coat colour: " + "Rainbow");
  } else {
    var colourTxt = document.createTextNode("Coat colour: " + ntc.name(String(input.colour))[1]);  
  }
  
  newDiv.appendChild(colourTxt);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var speciesTxt = document.createTextNode("Species Alleles: " + input.species);
  newDiv.appendChild(speciesTxt);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var parentsTxt = document.createTextNode("Parents: " + input.parents);
  newDiv.appendChild(parentsTxt);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  if (input.name == "Celestia") {
    var heightTxt = document.createTextNode("Height: " + 1.8);
  } else if (input.name == "Luna") {
    var heightTxt = document.createTextNode("Height: " + 1.6);    
  } else {
    var heightTxt = document.createTextNode("Height: " + input.height);
  }
  newDiv.appendChild(heightTxt);
  
  var br = document.createElement('br');
  newDiv.appendChild(br);
  
  var talentTxt = document.createTextNode("Special talent: " + input.talent);
  newDiv.appendChild(talentTxt);
  
  
  var sendBtn = document.createElement('BUTTON');
  sendBtn.style.float = "left";
  sendBtn.style.bottom = "0px";  
  newDiv.appendChild(sendBtn);
  var sendBtnTxt = document.createTextNode("Send");
  sendBtn.appendChild(sendBtnTxt);
  
  sendBtn.onclick = function() {
    if(ntc.name(String(input.colour))[1] == ponyWantedColour && findSpecies(input.species) == ponyWantedSpecies) {
      atmosphericHappiness += 1000;
      document.body.removeChild(newDiv);
      alert("Pony successfully sent!");
    } else {
      alert("This pony is not a match for the one wanted!\nKeep trying.");
    }
  }
  
}

function Breed (father, mother) {
  
  if (creatures[mother].name == "Celestia" || creatures[father].name == "Celestia") {
    var newColour = $.xcolor.random();
  } else {
    var newColour = $.xcolor.breed(creatures[mother].colour, creatures[father].colour);
  }
  
  var alleleRandom = Math.floor(Math.random() * 8);
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
    case 4:
      var newSpecies = creatures[father].species.charAt(0) + creatures[mother].species.charAt(0);
      break;
    case 5:
      var newSpecies = creatures[father].species.charAt(0) + creatures[mother].species.charAt(1);
      break;
    case 6:
      var newSpecies = creatures[father].species.charAt(1) + creatures[mother].species.charAt(0);
      break;
    case 7:
      var newSpecies = creatures[father].species.charAt(1) + creatures[mother].species.charAt(1);
      break;
  }
  newSpecies = newSpecies.toUpperCase();
  
  if (newSpecies.charAt(1) == 'E') {
    newSpecies = 'E' + newSpecies.charAt(0);
  }
  newSpecies = newSpecies.charAt(0) + newSpecies.charAt(1).toLowerCase();
  
  switch (findSpecies(newSpecies)) {
    case "E":
      var newName = EfirstNames[Math.floor(Math.random() * EfirstNames.length)] + " " + ElastNames[Math.floor(Math.random() * ElastNames.length)];
      var newTalent = ETalents[Math.floor(Math.random() * ETalents.length)];
      break;
    case "P":
      var newName = PfirstNames[Math.floor(Math.random() * PfirstNames.length)] + " " + PlastNames[Math.floor(Math.random() * PlastNames.length)];
      var newTalent = PTalents[Math.floor(Math.random() * PTalents.length)];
      break;
    case "U":
      var newName = UfirstNames[Math.floor(Math.random() * UfirstNames.length)] + " " + UlastNames[Math.floor(Math.random() * UlastNames.length)];
      var newTalent = UTalents[Math.floor(Math.random() * UTalents.length)];
      break;
  }
  
  var newParents = creatures[mother].name + " + " + creatures[father].name;
  var newHeight = (creatures[mother].height + creatures[father].height)/2  + Math.round(100*(Math.random()/100)-0.05)/100;
  
  creatures.push(new creature(newName, newColour, newSpecies, newParents, newHeight, newTalent));
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


function creature (name, colour, species, parents, height, talent) {
  this.name = name;
  this.colour = colour;
  this.species = species;
  this.parents = parents;
  this.height = height;
  this.talent = talent;
}


function customPony() {
  
  var promptName = prompt("To insert custom pony insert details.\nName (e.g Luna): " );
  var promptColour = prompt("To insert custom pony insert details.\nColour (e.g. #404680): " );
  var promptSpecies = prompt("To insert custom pony insert details.\nSpecies (e.g. EP): " );
  var promptParents = prompt("To insert custom pony insert details.\nParents (e.g. Luna + Celestia):" );
  var promptHeight = prompt("To insert custom pony insert details.\nHeight (e.g. 1.2): " );
  var promptTalent = prompt("To insert custom pony insert details.\nTalent (e.g. Raising the moon): " );
  
  creatures.push(new creature(promptName, promptColour, promptSpecies, promptParents, promptHeight, promptTalent));
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
}
