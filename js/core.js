
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    }
    var PACKAGE_NAME = '/Users/al/Desktop/WEBGL/js/core.data';
    var REMOTE_PACKAGE_NAME = (Module['filePackagePrefixURL'] || '') + 'core.data';
    var REMOTE_PACKAGE_SIZE = 296197;
    var PACKAGE_UUID = '8aeaa9c7-6efa-40c0-9a5c-f2d4ca088c69';
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'data', true, true);
Module['FS_createPath']('/data', 'core', true, true);
Module['FS_createPath']('/data/core', 'textures', true, true);
Module['FS_createPath']('/data/core', 'materials', true, true);
Module['FS_createPath']('/data/core/materials', 'simple', true, true);
Module['FS_createPath']('/data/core', 'properties', true, true);
Module['FS_createPath']('/data/core', 'scripts', true, true);
Module['FS_createPath']('/data/core', 'shaders', true, true);
Module['FS_createPath']('/data/core/shaders', 'simple', true, true);
Module['FS_createPath']('/data/core/shaders/simple', 'common', true, true);
Module['FS_createPath']('/data/core/shaders/simple', 'mesh', true, true);
Module['FS_createPath']('/data/core/shaders/simple', 'particles', true, true);
Module['FS_createPath']('/data/core/shaders/simple', 'render', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 2876, 0, 0).open('GET', '/data/core/textures/particles_base_attenuation.dds');
    new DataRequest(2876, 8464, 0, 0).open('GET', '/data/core/textures/particles_base_diffuse.dds');
    new DataRequest(8464, 8776, 0, 0).open('GET', '/data/core/textures/mesh_base_height.dds');
    new DataRequest(8776, 9088, 0, 0).open('GET', '/data/core/textures/mesh_base_ambient.dds');
    new DataRequest(9088, 10608, 0, 0).open('GET', '/data/core/textures/particles_base_normal.dds');
    new DataRequest(10608, 11104, 0, 0).open('GET', '/data/core/textures/mesh_base_normal.dds');
    new DataRequest(11104, 11416, 0, 0).open('GET', '/data/core/textures/mesh_base_parallax.dds');
    new DataRequest(11416, 32557, 0, 0).open('GET', '/data/core/materials/simple/unigine_mesh.mat');
    new DataRequest(32557, 40475, 0, 0).open('GET', '/data/core/materials/simple/unigine_particles.mat');
    new DataRequest(40475, 51901, 0, 0).open('GET', '/data/core/materials/simple/unigine_render.mat');
    new DataRequest(51901, 53658, 0, 0).open('GET', '/data/core/properties/unigine.prop');
    new DataRequest(53658, 56666, 0, 0).open('GET', '/data/core/scripts/camera.h');
    new DataRequest(56666, 65487, 0, 0).open('GET', '/data/core/scripts/projection.h');
    new DataRequest(65487, 77459, 0, 0).open('GET', '/data/core/shaders/simple/common/common_base.h');
    new DataRequest(77459, 79083, 0, 0).open('GET', '/data/core/shaders/simple/common/deferred_base.h');
    new DataRequest(79083, 87855, 0, 0).open('GET', '/data/core/shaders/simple/common/fragment_base.h');
    new DataRequest(87855, 89458, 0, 0).open('GET', '/data/core/shaders/simple/common/fragment_base_light_prob.h');
    new DataRequest(89458, 92794, 0, 0).open('GET', '/data/core/shaders/simple/common/fragment_base_light_spot.h');
    new DataRequest(92794, 99919, 0, 0).open('GET', '/data/core/shaders/simple/common/fragment_base_shading.h');
    new DataRequest(99919, 102450, 0, 0).open('GET', '/data/core/shaders/simple/common/fragment_base_shadow_proj.h');
    new DataRequest(102450, 106704, 0, 0).open('GET', '/data/core/shaders/simple/common/fragment_base_shadow_world.h');
    new DataRequest(106704, 108154, 0, 0).open('GET', '/data/core/shaders/simple/common/fragment_base_wireframe.shader');
    new DataRequest(108154, 112726, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base.h');
    new DataRequest(112726, 115604, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_ambient.h');
    new DataRequest(115604, 117243, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_auxiliary.h');
    new DataRequest(117243, 119043, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_deferred.h');
    new DataRequest(119043, 122289, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_light_omni.h');
    new DataRequest(122289, 124583, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_light_prob.h');
    new DataRequest(124583, 128056, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_light_proj.h');
    new DataRequest(128056, 130440, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_light_spot.h');
    new DataRequest(130440, 133456, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_light_world.h');
    new DataRequest(133456, 135936, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_shading.h');
    new DataRequest(135936, 137445, 0, 0).open('GET', '/data/core/shaders/simple/common/vertex_base_wireframe.h');
    new DataRequest(137445, 141837, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_ambient.shader');
    new DataRequest(141837, 148327, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_ambient_reflection_cube.shader');
    new DataRequest(148327, 149901, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_auxiliary.shader');
    new DataRequest(149901, 152347, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_deferred.shader');
    new DataRequest(152347, 155309, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_light.h');
    new DataRequest(155309, 157623, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_light_omni.shader');
    new DataRequest(157623, 160135, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_light_prob.shader');
    new DataRequest(160135, 162759, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_light_proj.shader');
    new DataRequest(162759, 167007, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_light_spot.shader');
    new DataRequest(167007, 169251, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_light_world.shader');
    new DataRequest(169251, 172383, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_refraction.shader');
    new DataRequest(172383, 175693, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_sample.h');
    new DataRequest(175693, 177574, 0, 0).open('GET', '/data/core/shaders/simple/mesh/fragment_base_shadow.shader');
    new DataRequest(177574, 180483, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base.h');
    new DataRequest(180483, 194279, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base.shader');
    new DataRequest(194279, 196910, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base_ambient_indirect.h');
    new DataRequest(196910, 199776, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base_ambient_reflection_2d.h');
    new DataRequest(199776, 203278, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base_ambient_reflection_cube.h');
    new DataRequest(203278, 205481, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base_ambient_reflection_fresnel.h');
    new DataRequest(205481, 207683, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base_refraction.h');
    new DataRequest(207683, 209411, 0, 0).open('GET', '/data/core/shaders/simple/mesh/vertex_base_shadow.h');
    new DataRequest(209411, 211916, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_ambient.shader');
    new DataRequest(211916, 214225, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_auxiliary.shader');
    new DataRequest(214225, 216884, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_deferred.shader');
    new DataRequest(216884, 219791, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_light_omni.shader');
    new DataRequest(219791, 222210, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_light_prob.shader');
    new DataRequest(222210, 225224, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_light_proj.shader');
    new DataRequest(225224, 227643, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_light_spot.shader');
    new DataRequest(227643, 230064, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_light_world.shader');
    new DataRequest(230064, 233284, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_refraction.shader');
    new DataRequest(233284, 235212, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_sample.h');
    new DataRequest(235212, 236869, 0, 0).open('GET', '/data/core/shaders/simple/particles/fragment_base_volume.h');
    new DataRequest(236869, 238577, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base.h');
    new DataRequest(238577, 243284, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base.shader');
    new DataRequest(243284, 246146, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_ambient.h');
    new DataRequest(246146, 248036, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_auxiliary.h');
    new DataRequest(248036, 250088, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_deferred.h');
    new DataRequest(250088, 252975, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_light_omni.h');
    new DataRequest(252975, 255685, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_light_prob.h');
    new DataRequest(255685, 258532, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_light_proj.h');
    new DataRequest(258532, 261787, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_light_spot.h');
    new DataRequest(261787, 264090, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_light_world.h');
    new DataRequest(264090, 266765, 0, 0).open('GET', '/data/core/shaders/simple/particles/vertex_base_refraction.h');
    new DataRequest(266765, 268217, 0, 0).open('GET', '/data/core/shaders/simple/render/fragment_fade.shader');
    new DataRequest(268217, 269836, 0, 0).open('GET', '/data/core/shaders/simple/render/vertex_fade.shader');
    new DataRequest(269836, 270332, 0, 0).open('GET', '/data/core/textures/mesh_base_diffuse.dds');
    new DataRequest(270332, 270828, 0, 0).open('GET', '/data/core/textures/mesh_base_emission.dds');
    new DataRequest(270828, 271140, 0, 0).open('GET', '/data/core/textures/mesh_base_lightmap.dds');
    new DataRequest(271140, 271452, 0, 0).open('GET', '/data/core/textures/mesh_base_lightmix.dds');
    new DataRequest(271452, 271764, 0, 0).open('GET', '/data/core/textures/mesh_base_specular.dds');
    new DataRequest(271764, 288356, 0, 0).open('GET', '/data/core/textures/mesh_reflection.dds');
    new DataRequest(288356, 296197, 0, 0).open('GET', '/data/core/unigine.h');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/data/core/textures/particles_base_attenuation.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/particles_base_diffuse.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_height.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_ambient.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/particles_base_normal.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_normal.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_parallax.dds"].onload();
          DataRequest.prototype.requests["/data/core/materials/simple/unigine_mesh.mat"].onload();
          DataRequest.prototype.requests["/data/core/materials/simple/unigine_particles.mat"].onload();
          DataRequest.prototype.requests["/data/core/materials/simple/unigine_render.mat"].onload();
          DataRequest.prototype.requests["/data/core/properties/unigine.prop"].onload();
          DataRequest.prototype.requests["/data/core/scripts/camera.h"].onload();
          DataRequest.prototype.requests["/data/core/scripts/projection.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/common_base.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/deferred_base.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/fragment_base.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/fragment_base_light_prob.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/fragment_base_light_spot.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/fragment_base_shading.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/fragment_base_shadow_proj.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/fragment_base_shadow_world.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/fragment_base_wireframe.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_ambient.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_auxiliary.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_deferred.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_light_omni.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_light_prob.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_light_proj.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_light_spot.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_light_world.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_shading.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/common/vertex_base_wireframe.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_ambient.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_ambient_reflection_cube.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_auxiliary.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_deferred.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_light.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_light_omni.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_light_prob.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_light_proj.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_light_spot.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_light_world.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_refraction.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_sample.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/fragment_base_shadow.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base_ambient_indirect.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base_ambient_reflection_2d.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base_ambient_reflection_cube.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base_ambient_reflection_fresnel.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base_refraction.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/mesh/vertex_base_shadow.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_ambient.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_auxiliary.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_deferred.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_light_omni.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_light_prob.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_light_proj.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_light_spot.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_light_world.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_refraction.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_sample.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/fragment_base_volume.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_ambient.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_auxiliary.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_deferred.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_light_omni.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_light_prob.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_light_proj.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_light_spot.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_light_world.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/particles/vertex_base_refraction.h"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/render/fragment_fade.shader"].onload();
          DataRequest.prototype.requests["/data/core/shaders/simple/render/vertex_fade.shader"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_diffuse.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_emission.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_lightmap.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_lightmix.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_base_specular.dds"].onload();
          DataRequest.prototype.requests["/data/core/textures/mesh_reflection.dds"].onload();
          DataRequest.prototype.requests["/data/core/unigine.h"].onload();
          Module['removeRunDependency']('datafile_/Users/al/Desktop/WEBGL/js/core.data');

    };
    Module['addRunDependency']('datafile_/Users/al/Desktop/WEBGL/js/core.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();

