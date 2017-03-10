cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-flashlight.Flashlight",
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.3-dev",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-inappbrowser": "1.0.0"
};
// BOTTOM OF METADATA
});