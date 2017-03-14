var lastfmapi = {
    authorize: function (callback) {
        alert("start")

        var api_key = "1ad9e764ccfe8a34d10c309b03d088ad";
        var redirect_uri = "http://localhost";

        //Build the OAuth consent page URL
        var authUrl = 'http://www.last.fm/api/auth/?' + $.param({
                api_key: api_key,
                cb: redirect_uri,

            });

        //Open the OAuth consent page in the InAppBrowser
        var authWindow = cordova.InAppBrowser.open(authUrl, '_blank', 'location=no,toolbar=no');

        authWindow.addEventListener('loadstart', function (event) {
            //alert(event.url)
            //parse the access token from the url
            var acc_token = /\?token=(.+)$/.exec(event.url);

            //if we have the access_token, then close the oauth window/page
            if (acc_token) {

                authWindow.close();
                callback(acc_token[0]);
            }
        });
        authWindow.addEventListener('loaderror', function (params) {
            // alert(params.message); //should show only one error that it can not find the http://localhost url, that should be ignored
        })


    }
}
var lastfm_token;
function callLastFM() {
    lastfmapi.authorize(function (token) {
        //
        alert(token);
        lastfm_token = token;
        var appi_key = "1ad9e764ccfe8a34d10c309b03d088ad"
        var api_sec = md5('1ad9e764ccfe8a34d10c309b03d088adxxxxxxxxmethodauth.getSession' + token + 'xxxxxxxmysecret');
        alert (api_sec);
        //TODO:get the data from lastfm, Done
        getUsersRecentTracks(token, appi_key, api_sec);
    })
}

function getUsersRecentTracks(token, appi_key, api_sec) {
    alert('here here here');
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://ws.audioscrobbler.com/2.0/?method=auth.getSession$token=" + token + "&api_key=" +appi_key + 'api_sig='+api_sec + 'format=json',
        success: function (data) {

            alert(data)
        },
        error: function (error) {
            alert(JSON.stringify(error))
        }

    })
}