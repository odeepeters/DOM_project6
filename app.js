document.addEventListener('DOMContentLoaded', function() {
    var colorBox = document.getElementById('color-box'); 
    var changeColorBtn = document.getElementById('change-color-btn');


    // Function to generate random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;

    }

    // Adding event listener to change-color-btn
    changeColorBtn.addEventListener('click', function(){
        var randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });

    });





    // document.addEventListener('DOMContentLoaded', function() {
    //     // Selecting elements
    //     var colorBox = document.getElementById('color-box');
    //     var changeColorBtn = document.getElementById('change-color-btn');
    
    //     // Function to generate random color
    //     function getRandomColor() {
    //         var letters = '0123456789ABCDEF';
    //         var color = '#';
    //         for (var i = 0; i < 6; i++) {
    //             color += letters[Math.floor(Math.random() * 16)];
    //         }
    //         return color;
    //     }
    
    //     // Adding event listener to change-color-btn
    //     changeColorBtn.addEventListener('click', function() {
    //         var randomColor = getRandomColor();
    //         colorBox.style.backgroundColor = randomColor;
    //     });
    // });
    