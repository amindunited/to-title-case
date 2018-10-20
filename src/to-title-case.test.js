/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const toTitleCase = require('./index');
const expect = require('chai').expect
const expected = 'MyDasherisedName';

describe('To Title Case', () => {

  it('should export a function', () => {
    expect(toTitleCase).to.be.a('function');
  });

  it('should return Title case from a Kebab case string', () => {
    expect(toTitleCase('my-dasherised-name')).to.equal(expected);
  });

  it('should return Title case from a Snake case string', () => {
    expect(toTitleCase('my_dasherised_name')).to.equal(expected);
  });

  it('should return Title case from a Camel case string', () => {
    expect(toTitleCase('myDasherisedName')).to.equal(expected);
  });
});
