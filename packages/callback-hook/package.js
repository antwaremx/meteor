Package.describe({
  summary: "Register callbacks on a hook",
  version: '1.4.0-rc240.2'
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.mainModule('hook.js');
  api.export('Hook');
});

Package.onTest(function (api) {
  api.use('callback-hook');
  api.use('tinytest');
  api.addFiles('hook_tests.js', 'server');
});
