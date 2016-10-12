# Jest-TypeScript-Coverage

[Jest](https://github.com/facebook/jest) allows to use TypeScript based code with test cases by supporting [scriptPreprocessor](https://facebook.github.io/jest/docs/configuration.html#scriptpreprocessor-string),
but in case of code coverage it doesn't automatically remap coverage into original TypeScript source code but have to manually remap once jest populate coverage results.

This repo provides proof-of-concept snippet to manually remap code coverage using [remap-istanbul](https://github.com/SitePen/remap-istanbul) `jest` and `ts-jest` preprocessor to run TypeScript based test cases.

# Usage

`npm test` chains all necessary steps to generate coverage, once test completed it'll generate `coverage_jest_raw` for original coverage and `coverage_remapped` for remapped coverage.
[remap_coverage.js](https://github.com/kwonoj/jest-typescript-coverage/blob/master/remap_coverage.js) generates mutated code coverage allows remap to original build's source map then remap it via `remap-istanbul`.

*Raw coverage*

![](https://github.com/kwonoj/jest-typescript-coverage/blob/master/images/raw.png)

*Remapped coverage*

![](https://github.com/kwonoj/jest-typescript-coverage/blob/master/images/remapped.png)
