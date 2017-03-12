/**
 * Created by Stefan Aleksik on 08.3.2017.
 */

/* @author: Stefan, contributor: Alisa
*
* AJAX inspiration: http://hollyschinsky.github.io/spotify-browser/; http://stackoverflow.com/questions/36885050/line-application-login-api-auth2-not-working/38151815 (this is not the original but just a copy Alisa can find the original url)
* URL parse: http://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
*/
var spotify = {

    authorize: function (callback) {
        var client_id = "4feeba43e6634d019efb83b3fdc7fe31";
        var redirect_uri = "http://localhost";
        var scope="user-read-private user-read-email user-read-birthdate user-library-read user-follow-read user-top-read";
        var state = generateRandomString(16);
        //Build the OAuth consent page URL
        var authUrl = 'https://accounts.spotify.com/authorize?' + $.param({
                client_id: client_id,
                redirect_uri: redirect_uri,
                response_type: 'token',
                scope: scope,
                state: state
            });
        //Open the OAuth consent page in the InAppBrowser
        var authWindow = cordova.InAppBrowser.open(authUrl, '_blank', 'location=no,toolbar=no');
        authWindow.addEventListener('loadstart', function(event) {
            //parse the access token from the url
            var acc_token =  /\#access_token=(.+)$/.exec(event.url);
            var access_token = acc_token[1].split('&').join(',').split('=').join(',').split(',');
            //if we have the access_token, then close the oauth window/page
            if(access_token){
                authWindow.close();
                callback(access_token[0]);
            }
      });
        authWindow.addEventListener('loaderror',function(params){
           // alert(params.message); //should show only one error that it can not find the http://localhost url, that should be ignored
        })}};
var accessToken;
function callSpotify() {
    spotify.authorize(function (data) {
        /*alert(data);*/
        accessToken = data;
        //limit of the url should be set to maximum (50 or 100)
        getSpotifyData(data, 'https://api.spotify.com/v1/me/tracks?limit=50'); //GET user saved tracks
        getSpotifyData(data, 'https://api.spotify.com/v1/me/albums?limit=50'); //GET user saved albums
    });
}
// generateRandomString -- this function is recommended by Spotify to generate state param for the login url
// source: https://github.com/spotify/web-api-auth-examples/blob/master/implicit_grant/public/index.html
//@param length - int -- the int will set the number of random letters/numbers in the string
function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

/*
* function getSpotifyData -- Recursive AJAX requests that handles Spotify API
* This function can handle calls for User's: saved tracks, saved album, TBA
* author: Stefan
* @param key String -- Spotify authorization key
* @param url String -- Spotify endpoint
*
* Tips: When writing the url don't forget to set the limit to 50 or 100 (check the endpoint for the maximum)
* */

function getSpotifyData(key, url) {
        $.ajax({
            dataType: 'json',
            url: url,
            async: false, //this will add a bit of time but its safer since the server has a 3second delly
            headers: {
                'Authorization': 'Bearer ' + key
            },
            success: function(response) {
                /*alert(url);
                alert(response.total);
                alert(response.next);*/
                //here we should send the data -- Dawit do your magic
                if(response.next){
                    getSpotifyData(key, response.next); //this is a Pagination object parameter that consist the next array of items
                }

            },
            error: function (xhr) {
                alert("Error on ajax call " + xhr);
            }
        });
}

/*Create function for playlist calls*/