exports.config = {directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities:{'browserName': 'chrome'},
    framework:'jasmine',
    specs: ['../LearningFolder/test.js']
  };