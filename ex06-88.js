function gazo688() {
  var img = document.getElementById('who688').getElementsByTagName('img')[0];
  if (img.getAttribute('alt') === 'オフ') {
    img.src = 'uresinoryuu./image/bulbon.png'; // 画像のパスを修正
    img.alt = 'オン';
  } else {
    img.src = 'Josai./image/bulboff.png'; // 画像のパスを修正
    img.alt = 'オフ';
  }
}
