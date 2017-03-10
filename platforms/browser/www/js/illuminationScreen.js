/**
 * Created by Stefan Aleksik on 10.3.2017.
 */
/* Some part from the code are from:
   https://www.codecademy.com/en/forum_questions/525e864c80ff338580001a53#answer-525f04aaf10c609243002431 opened on 08.03.2017 -- color and illumination
   @author Stefan
 !Note:
 We can make an algorithm that generates warm and cold colors using the hex color spectrum and use it on songs depending on their mood
 + we can use multiple elements (<div>) to make the screen more interactive
 + we can add animation to the div

 */

function illumination() {
    var safeColors = ['00','33','66','99','cc','ff'];
    var rand = function() {
        return Math.floor(Math.random()*6);
    };
    var randomColor = function() {
        var r = safeColors[rand()];
        var g = safeColors[rand()];
        var b = safeColors[rand()];
        return "#"+r+g+b;
    };

    setInterval(function () {
        $('#illumination').css('background',randomColor());
    }, 500);
}