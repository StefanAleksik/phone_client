/**
 * Created by Stefan Aleksik on 08.3.2017.
 */
/* Some part from the code are from:
   http://jsfiddle.net/tschleuss/2cxGK/ opened on 08.03.2017 - party_controller
   http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula?page=1&tab=active#tab-top opened on 08.03.2017 - distance

   */
function PartyController() {

    // values for user location
    this.lat = null;
    this.lng = null;

    // with this you set the location for the party this values are a placeholder we need to develop a interface for creating events
    this.lat1 = 56.850627599999996;
    this.lng1 = 14.8232023;

    this.callPlacesAPI = function() {
        /*return [this.lat, this.lng];*/
        getDistanceFromLatLonInM(this.lat1, this.lng1, this.lat, this.lng);
        console.log('Do something with '+ this.lat+' and '+ this.lng +' =) ');
    }
}


function getDistanceFromLatLonInM(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c ; // Distance in km
    var dm = d *1000; // Distance in m


    /* Here you can trigger the screen on distance*/
    //for building a CMS we should also allow the users to add radius

    console.log('distance is: ' + dm);
    if (dm < 500){
        illumination();
    } //
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

