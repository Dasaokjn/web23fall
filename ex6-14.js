 <script>
        function startTimer() {
            // 3秒後にchange1関数を呼び出す
            setTimeout(change1, 3000);
        }

        function change1() {
            // 画像を変更する
            document.getElementById('1').src = './image/ペッパー.jpg';
            
            // さらに3秒後にchange2関数を呼び出す
            setTimeout(change2, 3000);
        }

        function change2() {
            // 画像を再び変更する
            document.getElementById('1').src = './image/uresinoryuu.png';
        }
    </script>

