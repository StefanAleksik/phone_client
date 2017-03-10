cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "id": "cordova-plugin-flashlight.Flashlight",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-geolocation": "2.4.3-dev",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-flashlight": "3.2.0",
    "cordova-plugin-inappbrowser": "1.0.0"
}
// BOTTOM OF METADATA
});