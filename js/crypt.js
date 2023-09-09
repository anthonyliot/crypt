
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
    var PACKAGE_NAME = '/Users/al/Desktop/WEBGL/js/crypt.data';
    var REMOTE_PACKAGE_NAME = (Module['filePackagePrefixURL'] || '') + 'crypt.data';
    var REMOTE_PACKAGE_SIZE = 24639399;
    var PACKAGE_UUID = '515e8a4f-ebdc-4dc5-84bd-03a98bbea41e';
  
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
Module['FS_createPath']('/data', 'demos', true, true);
Module['FS_createPath']('/data/demos', 'cryptwebgl', true, true);
Module['FS_createPath']('/data/demos/cryptwebgl', 'cameras', true, true);
Module['FS_createPath']('/data/demos/cryptwebgl', 'meshes', true, true);
Module['FS_createPath']('/data/demos/cryptwebgl', 'splashes', true, true);
Module['FS_createPath']('/data/demos/cryptwebgl', 'textures', true, true);

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
      new DataRequest(0, 30297, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_0.txt');
    new DataRequest(30297, 75179, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_1.txt');
    new DataRequest(75179, 105812, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_2.txt');
    new DataRequest(105812, 150163, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_3.txt');
    new DataRequest(150163, 203333, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_5.txt');
    new DataRequest(203333, 242646, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_6.txt');
    new DataRequest(242646, 296842, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_7.txt');
    new DataRequest(296842, 376215, 0, 0).open('GET', '/data/demos/cryptwebgl/cameras/camera_8.txt');
    new DataRequest(376215, 2236110, 0, 0).open('GET', '/data/demos/cryptwebgl/meshes/sanctuary.mesh');
    new DataRequest(2236110, 2255351, 0, 0).open('GET', '/data/demos/cryptwebgl/meshes/sky.mesh');
    new DataRequest(2255351, 2639560, 0, 0).open('GET', '/data/demos/cryptwebgl/splashes/credits_16x9.jpg');
    new DataRequest(2639560, 4231388, 0, 0).open('GET', '/data/demos/cryptwebgl/splashes/world_16x9.png');
    new DataRequest(4231388, 4406292, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_marble_d.dds');
    new DataRequest(4406292, 4581196, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_marble_s.dds');
    new DataRequest(4581196, 4625028, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_relief1_d.dds');
    new DataRequest(4625028, 4668860, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_relief1_s.dds');
    new DataRequest(4668860, 4690852, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_relief2_d.dds');
    new DataRequest(4690852, 4712844, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_relief2_s.dds');
    new DataRequest(4712844, 5062524, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_d.dds');
    new DataRequest(5062524, 5106356, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_relief1_d.dds');
    new DataRequest(5106356, 5150188, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_relief2_d.dds');
    new DataRequest(5150188, 5194020, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_relief3_d.dds');
    new DataRequest(5194020, 5196892, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_fillet_d.dds');
    new DataRequest(5196892, 5371796, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_frame_d.dds');
    new DataRequest(5371796, 5393788, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_side_d.dds');
    new DataRequest(5393788, 5437620, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/bible_d.dds');
    new DataRequest(5437620, 5787300, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/candlestick_d.dds');
    new DataRequest(5787300, 5874836, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/candlestick_e.dds');
    new DataRequest(5874836, 6049740, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/candlestick_s.dds');
    new DataRequest(6049740, 6093572, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/ceiling_d.dds');
    new DataRequest(6093572, 6181108, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/ceiling_windows_d.dds');
    new DataRequest(6181108, 6203100, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/column2_d.dds');
    new DataRequest(6203100, 6378004, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/column_d.dds');
    new DataRequest(6378004, 6389068, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/column_relief_d.dds');
    new DataRequest(6389068, 6563988, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/door_d.dds');
    new DataRequest(6563988, 6651524, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fire_blue_flame_d.dds');
    new DataRequest(6651524, 6739060, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fire_red_flame_d.dds');
    new DataRequest(6739060, 6913964, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/floor_d.dds');
    new DataRequest(6913964, 7263636, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fresco_d.dds');
    new DataRequest(7263636, 7307468, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/relief_griffin_clock_d.dds');
    new DataRequest(7307468, 7351300, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/relief_griffin_key_d.dds');
    new DataRequest(7351300, 7526204, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/sky_d.dds');
    new DataRequest(7526204, 7613740, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/smoke_light_d.dds');
    new DataRequest(7613740, 7619356, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/spark_d.dds');
    new DataRequest(7619356, 7794260, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_angel_d.dds');
    new DataRequest(7794260, 7969164, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_dog_d.dds');
    new DataRequest(7969164, 8668356, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_girl_d.dds');
    new DataRequest(8668356, 8843260, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_reader_d.dds');
    new DataRequest(8843260, 9018164, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/stone1_d.dds');
    new DataRequest(9018164, 9193068, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/stone2_d.dds');
    new DataRequest(9193068, 9236900, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border1_d.dds');
    new DataRequest(9236900, 9247964, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border2_d.dds');
    new DataRequest(9247964, 9259028, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border3_d.dds');
    new DataRequest(9259028, 9281020, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border4_d.dds');
    new DataRequest(9281020, 9368556, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wheel_d.dds');
    new DataRequest(9368556, 9543460, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/windows_d.dds');
    new DataRequest(9543460, 9546563, 0, 0).open('GET', '/data/demos/cryptwebgl/crypt.cpp');
    new DataRequest(9546563, 9571586, 0, 0).open('GET', '/data/demos/cryptwebgl/crypt.mat');
    new DataRequest(9571586, 9608537, 0, 0).open('GET', '/data/demos/cryptwebgl/crypt.world');
    new DataRequest(9608537, 9611741, 0, 0).open('GET', '/data/demos/cryptwebgl/unigine.cpp');
    new DataRequest(9611741, 9624010, 0, 0).open('GET', '/data/demos/cryptwebgl/unigine.png');
    new DataRequest(9624010, 15216542, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/hall_lr.dds');
    new DataRequest(15216542, 16614770, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/objects_lr.dds');
    new DataRequest(16614770, 16616959, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fire_red_glow_attenuation_dr.dds');
    new DataRequest(16616959, 16619148, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fire_blue_glow_attenuation_dr.dds');
    new DataRequest(16619148, 16684811, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fire_glow_dr.dds');
    new DataRequest(16684811, 16687687, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fire_attenuation_dr.dds');
    new DataRequest(16687687, 16786119, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_c.dds');
    new DataRequest(16786119, 16829975, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_relief2_n.dds');
    new DataRequest(16829975, 16917511, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_relief1_n.dds');
    new DataRequest(16917511, 17267191, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/altar_marble_n.dds');
    new DataRequest(17267191, 17616871, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_n.dds');
    new DataRequest(17616871, 17966551, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/windows_n.dds');
    new DataRequest(17966551, 18054087, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wheel_n.dds');
    new DataRequest(18054087, 18097943, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border4_n.dds');
    new DataRequest(18097943, 18119943, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border3_n.dds');
    new DataRequest(18119943, 18141943, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border2_n.dds');
    new DataRequest(18141943, 18229479, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/wall_border1_n.dds');
    new DataRequest(18229479, 18579159, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/stone2_n.dds');
    new DataRequest(18579159, 18928839, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_reader_n.dds');
    new DataRequest(18928839, 20327095, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_girl_n.dds');
    new DataRequest(20327095, 20676775, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/stone1_n.dds');
    new DataRequest(20676775, 21026455, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_angel_n.dds');
    new DataRequest(21026455, 21376135, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/st_dog_n.dds');
    new DataRequest(21376135, 21463671, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/relief_griffin_key_n.dds');
    new DataRequest(21463671, 22162887, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/fresco_n.dds');
    new DataRequest(22162887, 22250423, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/relief_griffin_clock_n.dds');
    new DataRequest(22250423, 22600103, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/floor_n.dds');
    new DataRequest(22600103, 22949815, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/door_n.dds');
    new DataRequest(22949815, 23299495, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/column_n.dds');
    new DataRequest(23299495, 23321495, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/column_relief_n.dds');
    new DataRequest(23321495, 23409031, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/ceiling_windows_n.dds');
    new DataRequest(23409031, 23452887, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/column2_n.dds');
    new DataRequest(23452887, 23540423, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/ceiling_n.dds');
    new DataRequest(23540423, 23890103, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/candlestick_n.dds');
    new DataRequest(23890103, 23977639, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/bible_n.dds');
    new DataRequest(23977639, 24021495, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_side_n.dds');
    new DataRequest(24021495, 24371175, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_frame_n.dds');
    new DataRequest(24371175, 24376791, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_fillet_n.dds');
    new DataRequest(24376791, 24464327, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_relief3_n.dds');
    new DataRequest(24464327, 24551863, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_relief1_n.dds');
    new DataRequest(24551863, 24639399, 0, 0).open('GET', '/data/demos/cryptwebgl/textures/arch_aisle_relief2_n.dds');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_0.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_1.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_2.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_3.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_5.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_6.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_7.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/cameras/camera_8.txt"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/meshes/sanctuary.mesh"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/meshes/sky.mesh"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/splashes/credits_16x9.jpg"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/splashes/world_16x9.png"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_marble_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_marble_s.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_relief1_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_relief1_s.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_relief2_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_relief2_s.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_relief1_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_relief2_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_relief3_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_fillet_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_frame_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_side_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/bible_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/candlestick_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/candlestick_e.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/candlestick_s.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/ceiling_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/ceiling_windows_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/column2_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/column_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/column_relief_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/door_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fire_blue_flame_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fire_red_flame_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/floor_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fresco_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/relief_griffin_clock_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/relief_griffin_key_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/sky_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/smoke_light_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/spark_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_angel_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_dog_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_girl_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_reader_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/stone1_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/stone2_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border1_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border2_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border3_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border4_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wheel_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/windows_d.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/crypt.cpp"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/crypt.mat"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/crypt.world"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/unigine.cpp"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/unigine.png"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/hall_lr.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/objects_lr.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fire_red_glow_attenuation_dr.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fire_blue_glow_attenuation_dr.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fire_glow_dr.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fire_attenuation_dr.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_c.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_relief2_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_relief1_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/altar_marble_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/windows_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wheel_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border4_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border3_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border2_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/wall_border1_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/stone2_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_reader_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_girl_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/stone1_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_angel_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/st_dog_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/relief_griffin_key_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/fresco_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/relief_griffin_clock_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/floor_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/door_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/column_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/column_relief_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/ceiling_windows_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/column2_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/ceiling_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/candlestick_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/bible_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_side_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_frame_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_fillet_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_relief3_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_relief1_n.dds"].onload();
          DataRequest.prototype.requests["/data/demos/cryptwebgl/textures/arch_aisle_relief2_n.dds"].onload();
          Module['removeRunDependency']('datafile_/Users/al/Desktop/WEBGL/js/crypt.data');

    };
    Module['addRunDependency']('datafile_/Users/al/Desktop/WEBGL/js/crypt.data');
  
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

