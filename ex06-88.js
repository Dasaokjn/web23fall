function gazo688() {
  var img = document.getElementById('who688').getElementsByTagName('img')[0];
  if (img.getAttribute('alt') === 'オフ') {
    img.src = './image/bulbon.png'; 
    img.alt = 'オン';
  } else {
    img.src = './image/bulboff.png'; 
    img.alt = 'オフ';
  }
}
