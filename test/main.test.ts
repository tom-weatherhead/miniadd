// miniadd/test/main.test.ts

'use strict';

import { add } from '..';

test('add test', () => {
	// Arrange
	const a = 2;
	const b = 3;
	const expectedResult = a + b;

	// Act
	const actualResult = add(a, b);

	// Assert
	expect(actualResult).toBe(expectedResult);
});
