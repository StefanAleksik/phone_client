/**
 * Created by Stefan Aleksik on 12.3.2017.
 */
function checkConnection() {
    var networkState = navigator.connection.type;

    if (networkState == Connection.WIFI){
        callSpotify();
        /*
        * callLastFM()
        * Dawit invoke LastFM API calls here
        *
        * */
    }
/*
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);*/
}