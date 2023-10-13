document.addEventListener("DOMContentLoaded", function() {
    var text = document.getElementById('about');
    if (text) {
      var splitText = text.innerText.split('');
      text.innerHTML = '';
      var i = 0;

      function ajoutDeLettre() {
        if (i < splitText.length) {
          text.innerHTML += splitText[i];
          i++;
        }
      }

      setInterval(ajoutDeLettre, 50);
    } else {
      console.error("L'élément n'a pas été trouvé.");
    }
  });