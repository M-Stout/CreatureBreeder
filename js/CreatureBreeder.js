var creatures = [];

var currentFather = null;
var currentMother = null;


$(document).ready(function() {
  

  creatures.push(new creature("Joe","#f0ffff", "SS"))
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
  creatures.push(new creature("Jane","#ffff0f", "ss"))
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
});


function createNewDiv (input, index) {
  
  var newDiv = document.createElement('div');
  newDiv.id = index;
  newDiv.className = 'creatureDiv';
  document.body.appendChild(newDiv);
  
  var nmeTxt = document.createTextNode(input.name);
  newDiv.appendChild(nmeTxt);
  
  var br = document.createElement('br')
  newDiv.appendChild(br);
  
  var btn = document.createElement('BUTTON');
  btn.style.position = 'relative';
  btn.style.top = '300px';
  newDiv.appendChild(btn);
  var btnTxt = document.createTextNode("BUTTON TEXT");
  btn.appendChild(btnTxt);

  newDiv.style.backgroundColor = input.colour;
  
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
  
  
}

function Breed (mother, father) {
  
  var newName = "babby";
  var newColour = $.xcolor.average(creatures[mother].colour, creatures[father].colour);
  var newPattern = "";
  
  creatures.push(new creature(newName,newColour, newPattern))
  createNewDiv(creatures[creatures.length-1], creatures.length-1);
  
}


function creature (name, colour, pattern) {
  this.name = name;
  this.colour = colour;
  this.pattern = pattern;
  
}