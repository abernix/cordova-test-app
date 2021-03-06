cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-meteor-webapp.WebAppLocalServer",
    "file": "plugins/cordova-plugin-meteor-webapp/www/webapp_local_server.js",
    "pluginId": "cordova-plugin-meteor-webapp",
    "merges": [
      "WebAppLocalServer"
    ]
  },
  {
    "id": "cordova-plugin-meteor-webapp-tests.tests",
    "file": "plugins/cordova-plugin-meteor-webapp-tests/www/tests.js",
    "pluginId": "cordova-plugin-meteor-webapp-tests"
  },
  {
    "id": "cordova-plugin-meteor-webapp-tests.fetch",
    "file": "plugins/cordova-plugin-meteor-webapp-tests/www/fetch.js",
    "pluginId": "cordova-plugin-meteor-webapp-tests",
    "runs": true
  },
  {
    "id": "cordova-plugin-meteor-webapp-tests.underscore",
    "file": "plugins/cordova-plugin-meteor-webapp-tests/www/underscore.js",
    "pluginId": "cordova-plugin-meteor-webapp-tests"
  },
  {
    "id": "cordova-plugin-meteor-webapp-tests.WebAppMockRemoteServer",
    "file": "plugins/cordova-plugin-meteor-webapp-tests/www/webapp_mock_remote_server.js",
    "pluginId": "cordova-plugin-meteor-webapp-tests",
    "clobbers": [
      "WebAppMockRemoteServer"
    ]
  },
  {
    "id": "cordova-plugin-meteor-webapp-tests.WebAppLocalServerTesting",
    "file": "plugins/cordova-plugin-meteor-webapp-tests/www/webapp_local_server_testing.js",
    "pluginId": "cordova-plugin-meteor-webapp-tests",
    "merges": [
      "WebAppLocalServer"
    ]
  },
  {
    "id": "cordova-plugin-test-framework.cdvtests",
    "file": "plugins/cordova-plugin-test-framework/www/tests.js",
    "pluginId": "cordova-plugin-test-framework"
  },
  {
    "id": "cordova-plugin-test-framework.jasmine_helpers",
    "file": "plugins/cordova-plugin-test-framework/www/jasmine_helpers.js",
    "pluginId": "cordova-plugin-test-framework"
  },
  {
    "id": "cordova-plugin-test-framework.medic",
    "file": "plugins/cordova-plugin-test-framework/www/medic.js",
    "pluginId": "cordova-plugin-test-framework"
  },
  {
    "id": "cordova-plugin-test-framework.main",
    "file": "plugins/cordova-plugin-test-framework/www/main.js",
    "pluginId": "cordova-plugin-test-framework"
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-meteor-webapp": "1.5.2",
  "cordova-plugin-meteor-webapp-tests": "1.3.1",
  "cordova-plugin-test-framework": "1.1.7-dev",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});