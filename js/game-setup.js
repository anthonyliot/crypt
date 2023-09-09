// Setup compiled code parameters and interaction with the web page
var global_width = 1040;
var global_height = 520;

var Module = {
    failed: false,
    preRun: [],
    postRun: [],
    preloadPlugins: [],
    print: function(text) {
        console.log('[STDOUT] ' + text);
    },
    printErr: function(text) {
        console.log(text);
    },
    canvas: document.getElementById('canvas'),
    statusMessage: 'Starting...',
    setStatus: function(text) {
        if (Module.setStatus.interval) clearInterval(Module.setStatus.interval);
        var statusElement = document.getElementById('status-text');
        var progressElement = document.getElementById('progress');
        if (Module.finishedDataFileDownloads >= 1 && Module.finishedDataFileDownloads < Module.expectedDataFileDownloads) {
            // If we are in the middle of multiple datafile downloads, do not show preloading progress - show only download progress
            var m2 = text.match(/([^ ]+) .*/);
            if (m2) {
                if (m2[1] == 'Preparing...') return;
            }
        }

        var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
        if (m) {
            text = m[1];
            progressElement.value = parseInt(m[2])*100;
            progressElement.max = parseInt(m[4])*100;
            progressElement.hidden = false;
        } else {
            progressElement.value = null;
            progressElement.max = null;
            progressElement.hidden = true;
        }
        statusElement.innerHTML = text;
    },
    totalDependencies: 0,
    monitorRunDependencies: function(left) {
        this.totalDependencies = Math.max(this.totalDependencies, left);
        Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
    },
    onFullScreen: function(isFullScreen) {
        if (isFullScreen) {
            Module.resumeMainLoop();
            Module.setOpacity(1);
            Module.setStatus('');
            document.querySelector('canvas').classList.remove( 'paused' );
            document.querySelector('canvas').classList.remove( 'hide' );
        //BananaBread.execute('musicvol $oldmusicvol'); // XXX TODO: need to restart the music by name here
        } else {
            Module.pauseMainLoop();
            Module.setOpacity(0.333);
            Module.setStatus('<b>paused (enter fullscreen to resume)</b>');
            document.querySelector('canvas').classList.add( 'paused' );
            document.querySelector('.status .ingame').classList.remove( 'hide' );
            document.querySelector('canvas').classList.add( 'hide' );
        //BananaBread.execute('oldmusicvol = $musicvol ; musicvol 0');
        }
    }
};

// Checks for features we cannot run without
// Note: Modify this for your needs. If your level does not use
//       texture compression, remove the check for it here.

(function() {
    function fail(text) {
        Module._main = null;
        document.querySelector('.level-title').classList.add('hide');
        document.querySelector('.status-content.error .details').innerHTML = text + ' is missing.';
        document.querySelector('.status-content.loading .progress-container').classList.add('hide');
        document.querySelector('.status-content.error').classList.remove('hide');
        Module.failed = true;
    }
    try {
        var canvas = document.createElement('canvas');
    } catch(e){}
    if (!canvas) fail('canvas element');
    try {
        var context = canvas.getContext('webgl');
    } catch(e){}
    if (!context) fail('WebGL');
    // var s3tc = context.getExtension('WEBGL_compressed_texture_s3tc') ||
    // context.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
    // context.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
    // if (!s3tc) fail('texture compression');
    // var pointerLock = canvas['requestPointerLock'] ||
    //                     canvas['mozRequestPointerLock'] ||
    //                     canvas['webkitRequestPointerLock'];
    // if (!pointerLock) fail('pointer lock/mouse lock');
})();

// Hooks

Module.setOpacity = function(opacity) {
    var rule = 'canvas.emscripten';
    var more = 'border: 1px solid black';
    var styleSheet = document.styleSheets[0];
    var rules = styleSheet.cssRules;
    for (var i = 0; i < rules.length; i++) {
        if (rules[i].cssText.substr(0, rule.length) == rule) {
            styleSheet.deleteRule(i);
            i--;
        }
    }
    styleSheet.insertRule(rule + ' { opacity: ' + opacity + '; ' + (more || '') + ' }', 0);
}

Module.setOpacity(0.1);

Module.fullscreenCallbacks = [];

Module.postLoadWorld = function() {

    Module.pauseMainLoop();
    setTimeout(function() {
        //document.querySelector('.progress-area').classList.add( 'hide' );
        //document.querySelector('.loading').classList.add( 'hide' );
        //document.querySelector('.status .ingame').classList.remove( 'hide' );
        document.querySelector('.status-content.loading').classList.add('hide');
        document.querySelector('.status-content.fullscreen-buttons').classList.remove('hide');
    }, 0);

    Module.resume = function() {
        Module.requestFullScreen();
        Module.setOpacity(1);
        Module.setStatus('');
        Module.resumeMainLoop();
    };
    Module.fullscreenLow = function() {
        document.querySelector('.status .ingame').classList.add( 'hide' )
        document.querySelector('.status-content.fullscreen-buttons').classList.add( 'hide' );
        document.querySelector('canvas').classList.remove('hide');

        Module.setOpacity(1);
        Module.setStatus('');
        //Module.ccall('setCanvasSize', null, ['number', 'number'], [global_width,global_height]);
        Module.setCanvasSize(global_width,global_height,1);

        if (typeof SDL != "undefined") {
            var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
            flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
            HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();

        Module.resumeMainLoop();
    };
    Module.fullscreenHigh = function() {
        document.querySelector('.status .ingame').classList.add( 'hide' )
        document.querySelector('.status-content.fullscreen-buttons').classList.add('hide');
        document.querySelector('canvas').classList.remove('hide');
        Module.requestFullScreen();
        Module.setOpacity(1);
        Module.setStatus('');
        //Module.ccall('setCanvasSize', null, ['number', 'number'], [screen.width, screen.height]);
        Module.setCanvasSize(screen.width, screen.height,1);

        if (typeof SDL != "undefined") {
            var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
            flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
            HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();

        Module.resumeMainLoop();
        Module.fullscreenCallbacks.forEach(function(callback) {
            callback()
        });
    };
};

Module.noImageDecoding = true;

var QUAL = 2; // 0 quality of texture /4 - 1 quality of texture /2  - 2 quality of texture /1
var DEBUG = 0; // 0 not show FPS or profiler else 1 show it
var SYSTEM = "demos/cryptwebgl";
var SOUND = 0;
var PARAM = [];

var command = "show_fps "+DEBUG+" && render_filter 2 && render_anisotropy 2 && render_stereo 0 && render_alpha_fade 0 &&\
  show_profiler "+DEBUG+" && render_manager_create_textures 1 && render_manager_create_meshes 1 && physics_threaded 0 &&\
  pathfind_threaded 0 && render_glow 0 && render_shaders 0 && render_reflection 0& & render_refraction 0 &&\
  render_textures "+QUAL+" && render_parallax 0 && render_deferred 0 && render_force_no_shadows 1 &&\
  render_skip_post_materials 1 && render_skip_deferred 1 && render_skip_opacity_ambient 0 &&\
  render_skip_opacity_light 0 && render_skip_transparent_ambient 0 && render_skip_transparent_light 0 &&\
  render_use_environment 0 && render_use_normalization 0 && gles_render_use_oes_texture_3d 0 && render_restart";

PARAM[0] = "emscripten_unigine"
PARAM[1] = "-video_mode"
PARAM[2] = -1;
PARAM[3] = "-video_width"
PARAM[4] = global_width;
PARAM[5] = "-video_height"
PARAM[6] = global_height;
PARAM[7] = "-sound_app";
PARAM[8] = SOUND==0?"null":"openal";
PARAM[9] = "-system_script";
PARAM[10] = SYSTEM+"/unigine.cpp";
PARAM[13] = "-console_command";
PARAM[14] = command;

Module.arguments = PARAM;
Module.autoexec = function(){}; // called during autoexec on load, so useful to tweak settings that require gl restart
Module.tweakDetail = function(){}; // called from postLoadWorld, so useful to make changes after the map has been loaded

(function() {
    var fraction = 0.70;
    var desired = Math.min(fraction*screen.availWidth, fraction*screen.availHeight, 600);
    var w, h;
    if (screen.width >= screen.height) {
        h = desired;
        w = Math.floor(desired * screen.width / screen.height);
    } else {
        w = desired;
        h = Math.floor(desired * screen.height / screen.width);
    }
    Module.desiredWidth = w;
    Module.desiredHeight = h;
})();

// Load scripts
(function() {

    function loadChildScript(name, then) {
        var js = document.createElement('script');
        if (then) js.onload = then;
        js.src = name;
        document.body.appendChild(js);
    }

    var levelTitleContainer = document.querySelector('.level-title span');
    var levelTitle = "";

    levelTitleContainer.innerHTML = levelTitle;

    var previewContainer = document.querySelector('.preview-content.low' );
    previewContainer.classList.add('show');

    if(!Module.failed){
        loadChildScript('./js/core.js', function() {
            loadChildScript('./js/crypt.js', function() {
                loadChildScript('./js/libunigine.js');
            });
        });
    }
})();

(function(){
    var highResButton = document.querySelector('.fullscreen-button.high-res');
    var lowResButton = document.querySelector('.fullscreen-button.low-res');
    var resumeHighResButton = document.querySelector('.fullscreen-button.resume-high-res');
    var resumeLowResButton = document.querySelector('.fullscreen-button.resume-low-res');

    //var resumeButton = document.querySelector('.fullscreen-button.resume');
    var quitButton = document.querySelector('.fullscreen-button.quit');

    highResButton.addEventListener('click', function(e){
        Module.fullscreenHigh();
    }, false);
    lowResButton.addEventListener('click', function(e){
        Module.fullscreenLow();
    }, false);
    resumeHighResButton.addEventListener('click', function(e){
        Module.fullscreenHigh();
    }, false);
    resumeLowResButton.addEventListener('click', function(e){
        Module.fullscreenLow();
    }, false);
    //resumeButton.addEventListener('click', function(e){
    //  Module.resume();
    //}, false);
    quitButton.addEventListener('click', function(e){
        window.location = 'index.html';
    }, false);

})();

function keydown(e) {
    if(e.keyCode==27) {
        if (!document.querySelector('.canvas').classList.contains('hide')) {
            Module.onFullScreen(0);
        }
    }
}

window.onkeydown = keydown;
