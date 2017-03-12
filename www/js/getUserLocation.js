/**
 * Created by Stefan Aleksik on 08.3.2017.
 */


function getUserLocation() {
    /*alert("get location");*/
    var myParty = new PartyController(); //Here we invoke the PartyController object which can handel the screen illumination (illuminationScreen.js)

    if (!navigator.geolocation){
        $('#location').append("<p>Geolocation is not supported by your browser</p>");
        return;
    }

    function success(position) {
       /* alert("alert")*/
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;

        myParty.lat = latitude;
        myParty.lng = longitude;
        myParty.callPlacesAPI();
        /*$('#location').append('<p>Latitude is ' + latitude + '<br>Longitude is ' + longitude + '</p>');
        $("#pp").html("This browser can create XMLHttpRequest object: " + jQuery.support.ajax);*/

    }

    function error() {
        $('#location').append("Unable to retrieve your location");
    }

    /*navigator.geolocation.watchPosition(success, error);*/
    navigator.geolocation.getCurrentPosition(success, error);

}




