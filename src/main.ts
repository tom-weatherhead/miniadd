// miniadd/src/main.ts

/*!
 * npm module 'miniadd'
 *
 * miniadd <https://github.com/tom-weatherhead/miniadd>
 *
 * Copyright © 2020 Tom Weatherhead.
 * Released under the MIT License.
 */

// 'use strict';

// This 'portability wrapper' was wantonly and gratuitously stolen,
// pilfered, lifted, borrowed, or otherwise acquired from the npm module
// 'is-windows' <https://github.com/jonschlinkert/is-windows>

declare const define: any;

(function (factory) {
	if (
		typeof exports === 'object' &&
		exports &&
		typeof module !== 'undefined'
	) {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof window !== 'undefined') {
		(window as any).miniadd = factory();
	} else if (typeof global !== 'undefined') {
		(global as any).miniadd = factory();
	} else if (typeof self !== 'undefined') {
		(self as any).miniadd = factory();
	} else {
		this.miniadd = factory();
	}
})(function () {
	return {
		add: (a: number, b: number) => a + b
	};
});
