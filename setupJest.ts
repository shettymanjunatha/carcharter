import 'jest-preset-angular/setup-jest';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
  teardown: { destroyAfterEach: false },
});



// import { getTestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting,
// } from '@angular/platform-browser-dynamic/testing';
// import 'jest-preset-angular/setup-jest'
// import 'jest-preset-angular';
// import 'zone.js';
// import 'zone.js/testing';

// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting(),
//   {
//     teardown: { destroyAfterEach: true },
//   }
// );

// Object.defineProperty(window, 'CSS', { value: null });
// Object.defineProperty(window, 'getComputedStyle', {
//   value: () => {
//     return {
//       display: 'none',
//       appearance: ['-webkit-appearance']
//     };
//   }
// });
// Object.defineProperty(document, 'doctype', {
//   value: '<!DOCTYPE html>'
// });
// Object.defineProperty(document.body.style, 'transform', {
//   value: () => {
//     return {
//       enumerable: true,
//       configurable: true
//     };
//   }
// });
