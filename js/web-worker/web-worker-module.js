import '../empty-module.js';

self.addEventListener('message', function (e) {
    self.postMessage(e.data);// send it back
}, false);