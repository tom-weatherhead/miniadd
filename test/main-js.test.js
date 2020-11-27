// miniadd/test/main-js.test.js

'use strict';

const engine = require('../commonjs/main.js');

test('add test', () => {
	// Arrange
	const a = 2;
	const b = 3;
	const expectedResult = a + b;

	// Act
	const actualResult = engine.add(a, b);

	// Assert
	expect(actualResult).toBe(expectedResult);
});
