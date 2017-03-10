/**
 * Created by Stefan Aleksik on 08.3.2017.
 */
/*
* @author: Stefan, contributor: Alisa
*
* AJAX inspiration: http://hollyschinsky.github.io/spotify-browser/; http://stackoverflow.com/questions/36885050/line-application-login-api-auth2-not-working/38151815 (this is not the original but just a copy Alisa can find the original url)
*
* code for @param state https://github.com/spotify/web-api-auth-examples/blob/master/implicit_grant/public/index.html
*
* */
var spotify = {

    authorize: function (callback) {

        var client_id = "4feeba43e6634d019efb83b3fdc7fe31";
        var redirect_uri = "http://localhost";
        var scope="user-read-private user-read-email user-read-birthdate user-library-read user-follow-read user-top-read";
        var state = generateRandomString(16);
        /*alert($.param)*/
        //Build the OAuth consent page URL
        var authUrl = 'https://accounts.spotify.com/authorize?' + $.param({
                client_id: client_id,
                redirect_uri: redirect_uri,
                response_type: 'token',
                scope: scope,
                state: state
            });
        /*alert("start3")
        alert(cordova.InAppBrowser)*/
        //Open the OAuth consent page in the InAppBrowser
        var authWindow = cordova.InAppBrowser.open(authUrl, '_blank', 'location=no,toolbar=no');

        authWindow.addEventListener('loadstart', function(event) {

            //parse the access token from the url
            var acc_token =  /\#access_token=(.+)$/.exec(event.url);
            var access_token = acc_token[1].split('&').join(',').split('=').join(',').split(',');
            /*alert(access_token);*/
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

        // alert(accessToken);
        // $loginStatus.html('Access Token: ' + data.access_token);
        /*alert(data);*/ //http://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript

        accessToken = data;
        getSpotifyData(data);
        /* console.log(data);*/
       /* console.log(JSON.stringify(data));*/
        /*getDataProfile();*/ //get data spotify
        /*$("#accesstokenget").html('access token get');*/

    });

}
// generateRandomString this function is recommended by Spotify to generate state param for the login url
//@param length - int
function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getSpotifyData(data) {
    var url = 'https://api.spotify.com/v1/me';
    /*alert(data);*/
        $.ajax({
            dataType: 'json',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + data
            },
            success: function(response) {
                alert('hi1');
                alert(response.id);
                console.log(response);

            },
            error: function (xhr) {
                alert("Error on ajax call " + xhr);
            }
        });
}

var aRequest = function(){
    var url = "https://api.spotify.com/v1/search?q=hello&type=track&limit=5";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (resp) {
            console.log(resp);
            alert(resp);
        },
        error: function (xhr) {
            alert("Error on ajax call " + xhr);
        }
    });
};

$(document).ready(function(){
    $('#biz').click(aRequest);
});