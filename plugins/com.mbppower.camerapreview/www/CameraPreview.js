cordova.define("com.mbppower.camerapreview.CameraPreview", function(require, exports, module) {
//cordova.define("com.mbppower.camerapreview.CameraPreview", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
  utils = require('cordova/utils'),
  exec = require('cordova/exec');

var PLUGIN_NAME = "CameraPreview";

var CameraPreview = function() {};

CameraPreview.setOnPictureTakenHandler = function(onPictureTaken) {
  exec(onPictureTaken, onPictureTaken, PLUGIN_NAME, "setOnPictureTakenHandler", []);
};

//@param rect {x: 0, y: 0, width: 100, height:100}
//@param defaultCamera "front" | "back"
CameraPreview.startCamera = function(rect, defaultCamera, tapEnabled, dragEnabled, toBack, alpha) {
  if (typeof(alpha) === 'undefined') alpha = 1;
  exec(null, null, PLUGIN_NAME, "startCamera", [rect.x, rect.y, rect.width, rect.height, defaultCamera, !!tapEnabled, !!dragEnabled, !!toBack, alpha]);
};
CameraPreview.stopCamera = function() {
  exec(null, null, PLUGIN_NAME, "stopCamera", []);
};
//@param size {maxWidth: 100, maxHeight:100}
CameraPreview.takePicture = function(size) {
  var params = [0, 0];
  if (size) {
    params = [size.maxWidth, size.maxHeight];
  }
  exec(null, null, PLUGIN_NAME, "takePicture", params);
};

CameraPreview.setColorEffect = function(effect) {
  exec(null, null, PLUGIN_NAME, "setColorEffect", [effect]);
};

/**
 * @param int zoom
 */
CameraPreview.setZoom = function(zoom) {
  exec(null, null, PLUGIN_NAME, "setZoom", [zoom]);
}

CameraPreview.previewSize = function(width, height) {
  return exec(null, null, PLUGIN_NAME, "previewSize", [width, height]);
}

/**
 * @param int flash mode
 * 0 -> OFF
 * 1 -> ON
 * 2 -> TORCH
 * 3 -> AUTO
 */
CameraPreview.setFlashMode = function(flash) {
  exec(null, null, PLUGIN_NAME, "setFlashMode", [flash]);
}

CameraPreview.switchCamera = function() {
  exec(null, null, PLUGIN_NAME, "switchCamera", []);
};

CameraPreview.hide = function() {
  exec(null, null, PLUGIN_NAME, "hideCamera", []);
};

CameraPreview.show = function() {
  exec(null, null, PLUGIN_NAME, "showCamera", []);
};

CameraPreview.disable = function(disable) {
  exec(null, null, PLUGIN_NAME, "disable", [disable]);
};

module.exports = CameraPreview;

//});

});
