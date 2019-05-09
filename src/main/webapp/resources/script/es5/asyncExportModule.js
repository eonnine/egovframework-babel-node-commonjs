'use strict';

module.exports = new Promise(function (resolve) {
  setTimeout(resolve, 1000, function (message) {
    console.log(message + '\nfrom ' + module.filename);
  });
});