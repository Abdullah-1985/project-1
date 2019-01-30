$(document).ready(function () {
    var playerOne = true;
    var playerTwo = false;
    var gameOver = false;
    var counter = 0;
    
    function play() {
        if ($(event.target).text() === '') {
            if (playerOne === true && gameOver === false) {
                $(event.target).text('O');
                counter++;
                playerOne = false;
                playerTwo = true;
            } else if (playerTwo === true && gameOver === false) {
                $(event.target).text('X');
                counter++;
                playerTwo = false;
                playerOne = true;
            } else {
                console.log('Game Over!');

            }
        }
        winnerCase();
    }


    function winnerCase() {
        if ($('#1').text() === 'O' && $('#2').text() === 'O' && $('#3').text() === 'O') {
            gameOver = true

            alert('player One win');

        } else if ($('#4').text() === 'O' && $('#5').text() === 'O' && $('#6').text() === 'O') {
            alert('player One win')
            gameOver = true
        } else if ($('#7').text() === 'O' && $('#8').text() === 'O' && $('#9').text() === 'O') {
            alert('player One win');
            gameOver = true
        } else if ($('#1').text() === 'O' && $('#4').text() === 'O' && $('#7').text() === 'O') {
            alert('player One win');
            gameOver = true
        } else if ($('#2').text() === 'O' && $('#5').text() === 'O' && $('#8').text() === 'O') {
            alert('player One win');
            gameOver = true
        } else if ($('#3').text() === 'O' && $('#6').text() === 'O' && $('#9').text() === 'O') {
            alert('player One win');
            gameOver = true
        } else if ($('#1').text() === 'O' && $('#5').text() === 'O' && $('#9').text() === 'O') {
            alert('player One win');
            gameOver = true
        } else if ($('#3').text() === 'O' && $('#5').text() === 'O' && $('#7').text() === 'O') {
            alert('player One win');
            gameOver = true
        } else if ($('#1').text() === 'X' && $('#2').text() === 'X' && $('#3').text() === 'X') {
            gameOver = true
            alert('player Two win');

        } else if ($('#4').text() === 'X' && $('#5').text() === 'X' && $('#6').text() === 'X') {
            alert('player Two win')
            gameOver = true
        } else if ($('#7').text() === 'X' && $('#8').text() === 'X' && $('#9').text() === 'X') {
            alert('player Two win');
            gameOver = true
        } else if ($('#1').text() === 'X' && $('#4').text() === 'X' && $('#7').text() === 'X') {
            alert('player Two win');
            gameOver = true
        } else if ($('#2').text() === 'X' && $('#5').text() === 'X' && $('#8').text() === 'X') {
            alert('player Two win');
            gameOver = true
        } else if ($('#3').text() === 'X' && $('#6').text() === 'X' && $('#9').text() === 'X') {
            alert('player Two win');
            gameOver = true
        } else if ($('#1').text() === 'X' && $('#5').text() === 'X' && $('#9').text() === 'X') {
            alert('player Two win');
            gameOver = true
        } else if ($('#3').text() === 'X' && $('#5').text() === 'X' && $('#7').text() === 'X') {
            alert('player Two win');
            gameOver = true
        } else if (counter === 9) {
            alert('Tie')

        }

    }

    function newGame() {

        location.reload();
    }

    $('.1').on('click', play)
    $("button").on("click", newGame);

});