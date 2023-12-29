   function startTimer() {
    setTimeout(change1, 3000);
    }

    function change1() {
      document.getElementById('1').src = './image/uresinoryuu.png';
   setTimeout(change2, 3000);
    }

    function change2() {
      // 画像を再び変更する
      document.getElementById('1').src = './image/CHATGPT.png';
    }

