# JavaScript template (including p5.js)

## Useful VS Code Extensions
 - LivePreview (Microsoft): preview browser inside workspace

The following has already been done for this repo (see sketch.js):

### How to setup p5 for VS Code (autocomplete & IntelliSense)
Put the TypeScript definition file into your project and reference them inside your sketch like this:

```js
/// <reference path="./TSDef/p5.global-mode.d.ts" />
"use strict";
```

<https://breaksome.tech/p5js-editor-how-to-set-up-visual-studio-code/>

#### Notes
Make sure to use the correlating output in order to see console logs.
The minified version of p5.js (p5.min.js) is included in this repo, but only p5.js gets used. You can choose your prefered version and delete the other one.
