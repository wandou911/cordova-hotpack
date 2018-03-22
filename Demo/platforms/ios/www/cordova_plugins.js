cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.handmobile.cordovaplugin.hotpatch.hotpatch",
        "file": "plugins/com.handmobile.cordovaplugin.hotpatch/www/hotpatch.js",
        "pluginId": "com.handmobile.cordovaplugin.hotpatch",
        "clobbers": [
            "hotpatch"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.handmobile.cordovaplugin.hotpatch": "1.0-dev",
    "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});