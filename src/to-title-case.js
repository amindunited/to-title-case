/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const toTitleCase = function (originalName) {

  let stringContentArray = [];
  let result;

	if ( originalName.indexOf('-') > 0) {
  	stringContentArray = originalName.split(/\-/)
  } else if ( originalName.indexOf('_') > 0) {
  	stringContentArray = originalName.split(/\_/)
  } else {
  	stringContentArray = [originalName];
  }

	result = stringContentArray.reduce((previous, current) => {

    return previous + current.toLowerCase().replace(/^\w/, (char) => {
    	return char.toUpperCase();
  	});

  });

	return result[0].toUpperCase() + result.substr(1);
}

module.exports = toTitleCase;
