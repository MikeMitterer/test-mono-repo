/** ------------------------------------------------------------------------------------------------
 * Sub-Projects können mit 'yarn constraints' auf falsche Versionsnummer usw. überprüft werden.
 */

/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require('@yarnpkg/types');

module.exports = defineConfig({

  async constraints({Yarn}) {
    // for (const dep of Yarn.dependencies({ ident: 'react' })) {
    //   dep.update(`18.0.0`);
    // }
    //
    // for (const dep of Yarn.dependencies({ ident: 'typescript' })) {
    //   dep.update(`4.9.5`);
    // }
    //
    // for (const dep of Yarn.dependencies({ ident: 'typescript' })) {
    //   dep.update(`4.9.5`);
    // }

    for (const dep of Yarn.dependencies({ ident: '@mmit/tdd', type: "devDependencies" })) dep.update(`^0.1.29`);
    for (const dep of Yarn.dependencies({ ident: '@mmit/webapp', type: "devDependencies" })) dep.update(`^0.1.7`);


    for (const dep of Yarn.dependencies({ ident: '@babel/cli', type: "devDependencies" })) dep.update(`^7.22.10`)
    for (const dep of Yarn.dependencies({ ident: '@babel/core', type: "devDependencies" })) dep.update(`^7.22.11`)
    // for (const dep of Yarn.dependencies({ ident: '@babel/node', type: "devDependencies" })) dep.update(`^7.22.10`)
    for (const dep of Yarn.dependencies({ ident: '@babel/plugin-transform-runtime', type: "devDependencies" })) dep.update(`^7.22.10`)
    for (const dep of Yarn.dependencies({ ident: '@babel/preset-env', type: "devDependencies" })) dep.update(`^7.22.10`)
    for (const dep of Yarn.dependencies({ ident: '@babel/preset-typescript', type: "devDependencies" })) dep.update(`^7.22.11`)
    for (const dep of Yarn.dependencies({ ident: '@babel/runtime', type: "devDependencies" })) dep.update(`^7.22.11`)
    // for (const dep of Yarn.dependencies({ ident: '@types/core-js', type: "devDependencies" })) dep.update(`^2.5.5`)
    for (const dep of Yarn.dependencies({ ident: '@types/eslint', type: "devDependencies" })) dep.update(`^8`)
    for (const dep of Yarn.dependencies({ ident: '@types/node', type: "devDependencies" })) dep.update(`^20.5.7`)
    for (const dep of Yarn.dependencies({ ident: '@types/shelljs', type: "devDependencies" })) dep.update(`^0.8.9`)
    for (const dep of Yarn.dependencies({ ident: '@types/ws', type: "devDependencies" })) dep.update(`^7.4.7`)
    for (const dep of Yarn.dependencies({ ident: '@typescript-eslint/eslint-plugin', type: "devDependencies" })) dep.update(`^6.6.0`)
    for (const dep of Yarn.dependencies({ ident: '@typescript-eslint/parser', type: "devDependencies" })) dep.update(`^6.6.0`)
    for (const dep of Yarn.dependencies({ ident: 'autoprefixer', type: "devDependencies" })) dep.update(`^10.4.15`)
    for (const dep of Yarn.dependencies({ ident: 'babel-loader', type: "devDependencies" })) dep.update(`^9.1.3`)
    for (const dep of Yarn.dependencies({ ident: 'babel-plugin-transform-inline-environment-variables', type: "devDependencies" })) dep.update(`^0.4.3`)
    // for (const dep of Yarn.dependencies({ ident: 'babel-preset-modern-browsers', type: "devDependencies" })) dep.update(`^15.0.2`)
    for (const dep of Yarn.dependencies({ ident: 'barrelsby', type: "devDependencies" })) dep.update(`^2.8.0`)
    for (const dep of Yarn.dependencies({ ident: 'beautify-html-webpack-plugin', type: "devDependencies" })) dep.update(`^1.0.3`)
    for (const dep of Yarn.dependencies({ ident: 'clean-webpack-plugin', type: "devDependencies" })) dep.update(`^4.0.0-alpha.0`)
    for (const dep of Yarn.dependencies({ ident: 'copy-webpack-plugin', type: "devDependencies" })) dep.update(`^9.0.1`)
    for (const dep of Yarn.dependencies({ ident: 'core-js', type: "devDependencies" })) dep.update(`^3.32.2`)
    for (const dep of Yarn.dependencies({ ident: 'css-loader', type: "devDependencies" })) dep.update(`^6.2.0`)
    for (const dep of Yarn.dependencies({ ident: 'date-fns', type: "devDependencies" })) dep.update(`2.23.0`)
    for (const dep of Yarn.dependencies({ ident: 'decamelize', type: "devDependencies" })) dep.update(`5.0.1`)
    for (const dep of Yarn.dependencies({ ident: 'ejs-compiled-loader', type: "devDependencies" })) dep.update(`^3.1.0`)
    for (const dep of Yarn.dependencies({ ident: 'eslint', type: "devDependencies" })) dep.update(`^8.48.0`)
    for (const dep of Yarn.dependencies({ ident: 'file-loader', type: "devDependencies" })) dep.update(`^6.2.0`)
    for (const dep of Yarn.dependencies({ ident: 'html-loader', type: "devDependencies" })) dep.update(`^2.1.2`)
    for (const dep of Yarn.dependencies({ ident: 'html-webpack-plugin', type: "devDependencies" })) dep.update(`^5.3.2`)
    for (const dep of Yarn.dependencies({ ident: 'html-webpack-string-replace-plugin', type: "devDependencies" })) dep.update(`^1.1.0`)

    // Jest
    const typesJestVersion      = `29.5.4`; // (27.5.1)  - https://www.npmjs.com/package/@types/jest
    const jestVersion           = `29.7.0`; // (^29.6.4) - https://www.npmjs.com/package/jest
    const jestPuppeteerVersion  = `9.0.0`; // (^9.0.0)   - https://bit.ly/48mua7R
    const puppeteerVersion      = `21.1.1`; // (^21.1.1) - https://www.npmjs.com/package/puppeteer
    const jestExtendedVersion   = `2.0.0`; // (^2.0.0)   - https://www.npmjs.com/package/jest-extended

    for (const dep of Yarn.dependencies({ ident: '@types/jest', type: "devDependencies" })) dep.update(typesJestVersion)
    for (const dep of Yarn.dependencies({ ident: 'babel-jest', type: "devDependencies" })) dep.update(jestVersion)
    for (const dep of Yarn.dependencies({ ident: 'jest', type: "devDependencies" })) dep.update(jestVersion)
    for (const dep of Yarn.dependencies({ ident: 'jest-cli', type: "devDependencies" })) dep.update(jestVersion)
    for (const dep of Yarn.dependencies({ ident: 'jest-environment-jsdom', type: "devDependencies" })) dep.update(jestVersion)
    for (const dep of Yarn.dependencies({ ident: 'jest-extended', type: "devDependencies" })) dep.update(jestExtendedVersion)
    for (const dep of Yarn.dependencies({ ident: 'jest-haste-map', type: "devDependencies" })) dep.update(jestVersion)
    for (const dep of Yarn.dependencies({ ident: 'jest-resolve', type: "devDependencies" })) dep.update(jestVersion)
    for (const dep of Yarn.dependencies({ ident: 'jest-puppeteer', type: "devDependencies" })) dep.update(jestPuppeteerVersion);
    for (const dep of Yarn.dependencies({ ident: 'puppeteer', type: "devDependencies" })) dep.update(puppeteerVersion);

    for (const dep of Yarn.dependencies({ ident: 'mini-css-extract-plugin', type: "devDependencies" })) dep.update(`^2.2.0`)
    for (const dep of Yarn.dependencies({ ident: 'postcss', type: "devDependencies" })) dep.update(`^8.4.29`)
    for (const dep of Yarn.dependencies({ ident: 'postcss-loader', type: "devDependencies" })) dep.update(`^7.3.3`)

    // Rollup
    const rollupVersion                  = '3.29.2' // - https://www.npmjs.com/package/rollup
    const rollupPluginScssVersion        = '3'      // '4.0.0' // '3' - https://www.npmjs.com/package/rollup-plugin-scss
    const rollupPluginImageVersion       = '3.0.2'  // - https://www.npmjs.com/package/rollup-plugin-scss
    const rollupPluginNodeResolveVersion = '15.2.1' // - https://www.npmjs.com/package/@rollup/plugin-node-resolve
    const rollupPluginReplaceVersion     = '5.0.2'  // - https://www.npmjs.com/package/@rollup/plugin-replace
    const rollupPluginTypescriptVersion  = '11.1.3' //  - https://www.npmjs.com/package/@rollup/plugin-typescript
    for (const dep of Yarn.dependencies({ ident: 'rollup', type: "devDependencies" })) dep.update(rollupVersion)
    for (const dep of Yarn.dependencies({ ident: 'rollup-plugin-scss', type: "devDependencies" })) dep.update(rollupPluginScssVersion)
    for (const dep of Yarn.dependencies({ ident: '@rollup/plugin-image', type: "devDependencies" })) dep.update(rollupPluginImageVersion)
    for (const dep of Yarn.dependencies({ ident: '@rollup/plugin-node-resolve', type: "devDependencies" })) dep.update(rollupPluginNodeResolveVersion)
    for (const dep of Yarn.dependencies({ ident: '@rollup/plugin-replace', type: "devDependencies" })) dep.update(rollupPluginReplaceVersion)
    for (const dep of Yarn.dependencies({ ident: '@rollup/plugin-typescript', type: "devDependencies" })) dep.update(rollupPluginTypescriptVersion)

    for (const dep of Yarn.dependencies({ ident: 'sass', type: "devDependencies" })) dep.update(`~1.32`)
    for (const dep of Yarn.dependencies({ ident: 'sass-loader', type: "devDependencies" })) dep.update(`10`)
    for (const dep of Yarn.dependencies({ ident: 'semver', type: "devDependencies" })) dep.update(`^7.3.5`)
    for (const dep of Yarn.dependencies({ ident: 'shelljs', type: "devDependencies" })) dep.update(`^0.8.4`)
    for (const dep of Yarn.dependencies({ ident: 'source-map-loader', type: "devDependencies" })) dep.update(`3.0.0`)
    for (const dep of Yarn.dependencies({ ident: 'style-loader', type: "devDependencies" })) dep.update(`^3.2.1`)
    for (const dep of Yarn.dependencies({ ident: 'ts-jest', type: "devDependencies" })) dep.update(`^29.1.1`)
    for (const dep of Yarn.dependencies({ ident: 'ts-loader', type: "devDependencies" })) dep.update(`^9.4.4`)
    for (const dep of Yarn.dependencies({ ident: 'ts-node', type: "devDependencies" })) dep.update(`^10.0.0`)
    // for (const dep of Yarn.dependencies({ ident: 'tslint-override', type: "devDependencies" })) dep.update(`^1.0.1`)
    for (const dep of Yarn.dependencies({ ident: 'typedoc', type: "devDependencies" })) dep.update(`^0.25`)
    for (const dep of Yarn.dependencies({ ident: 'typescript', type: "devDependencies" })) dep.update(`^5.2.2`)

    // WebPack:
    //     yarn add -D webpack webpack-cli webpack-dev-server webpack-livereload-plugin webpack-node-externals
    // Node-Externals:
    //     yarn add -D path-browserify crypto-browserify https-browserify stream-browserify stream-http browserify-zlib assert buffer
    // events os util
    // Tools:
    //     yarn add -D clean-terminal-webpack-plugin
    //
    const webpackVersion                  = '5.88.2'; // - https://www.npmjs.com/package/webpack
    const webpackCliVersion               = '5.1.4'; // - https://www.npmjs.com/package/webpack-cli
    const webpackDevServerVersion         = '4.15.1'; // '4.7.4' - https://www.npmjs.com/package/webpack-dev-server
    const webpackLivereloadPluginVersion  = '3.0.2'; // '3.0.1' - https://www.npmjs.com/package/webpack-livereload-plugin
    const webpackNodeExternalsVersion     = '3.0.0'; // - https://www.npmjs.com/package/webpack-node-externals
    for (const dep of Yarn.dependencies({ ident: 'webpack', type: "devDependencies" })) dep.update(webpackVersion)
    for (const dep of Yarn.dependencies({ ident: 'webpack-cli', type: "devDependencies" })) dep.update(webpackCliVersion)
    for (const dep of Yarn.dependencies({ ident: 'webpack-dev-server', type: "devDependencies" })) dep.update(webpackDevServerVersion)
    for (const dep of Yarn.dependencies({ ident: 'webpack-livereload-plugin', type: "devDependencies" })) dep.update(webpackLivereloadPluginVersion)
    for (const dep of Yarn.dependencies({ ident: 'webpack-node-externals', type: "devDependencies" })) dep.update(webpackNodeExternalsVersion)

    // for (const dep of Yarn.dependencies({ ident: '@types/jest', type: "devDependencies" })) dep.update(`27.5.1`);
    // for (const dep of Yarn.dependencies({ ident: 'babel-jest', type: "devDependencies" })) dep.update(`27.5.1`);
    // for (const dep of Yarn.dependencies({ ident: 'jest', type: "devDependencies" })) dep.update(`27.5.1`);
    // for (const dep of Yarn.dependencies({ ident: 'jest-cli', type: "devDependencies" })) dep.update(`27.5.1`);
    // for (const dep of Yarn.dependencies({ ident: 'jest-environment-node', type: "devDependencies" })) dep.update(`27.5.1`);
    // for (const dep of Yarn.dependencies({ ident: 'jest-extended', type: "devDependencies" })) dep.update(`^2.0.0`);
    // for (const dep of Yarn.dependencies({ ident: 'sass', type: "devDependencies" })) dep.update(`~1.32`);
    // for (const dep of Yarn.dependencies({ ident: 'sass-loader', type: "devDependencies" })) dep.update(`10`);
    // for (const dep of Yarn.dependencies({ ident: 'ts-jest', type: "devDependencies" })) dep.update(`27.1.5`);
    // for (const dep of Yarn.dependencies({ ident: 'ts-node', type: "devDependencies" })) { dep.update(`10.9.1`)
    // for (const dep of Yarn.dependencies({ ident: 'typescript', type: "devDependencies" })) dep.update(`^5.2.2`);
    // for (const dep of Yarn.dependencies({ ident: 'webpack', type: "devDependencies" })) dep.update(`5.88.2`);
    // for (const dep of Yarn.dependencies({ ident: 'webpack-cli', type: "devDependencies" })) dep.update(`5.1.4`);
    // for (const dep of Yarn.dependencies({ ident: 'webpack-dev-server', type: "devDependencies" })) dep.update(`4.7.4`);
    // for (const dep of Yarn.dependencies({ ident: 'webpack-livereload-plugin', type: "devDependencies" })) dep.update(`^3.0.1`);
    // for (const dep of Yarn.dependencies({ ident: 'webpack-node-externals', type: "devDependencies" })) dep.update(`^3.0.0`);

    // for (const dep of Yarn.dependencies({ ident: '@types/jest' })) dep.delete();
    // for (const dep of Yarn.dependencies({ ident: '@types/node' })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: 'awesome-typescript-loader', type: "devDependencies" })) dep.delete();

    // Sollte nicht benötigt werden. Heavy!
    // Funktioniert wie node allerdings "with the added benefit of compiling with Babel presets and plugins before running it.
    for (const dep of Yarn.dependencies({ ident: '@babel/node', type: "devDependencies" })) dep.delete();

    for (const dep of Yarn.dependencies({ ident: 'tslint', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: 'tslint-loader', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: '@typescript-eslint/eslint-plugin-tslint', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: 'tslint-consistent-codestyle', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: 'tslint-override', type: "devDependencies" }))  dep.delete();
    for (const dep of Yarn.dependencies({ ident: 'url-loader', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: '@types/puppeteer', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: '@types/expect-puppeteer', type: "devDependencies" })) dep.delete();

    for (const dep of Yarn.dependencies({ ident: '@babel/plugin-proposal-class-properties', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: '@babel/plugin-proposal-nullish-coalescing-operator', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: '@babel/plugin-proposal-object-rest-spread', type: "devDependencies" })) dep.delete();
    for (const dep of Yarn.dependencies({ ident: '@babel/plugin-proposal-optional-chaining', type: "devDependencies" })) dep.delete();

    // Use @babel/preset-env instead with configured browserslists 'defaults and supports es6-module'
    for (const dep of Yarn.dependencies({ ident: 'babel-preset-modern-browsers', type: "devDependencies" })) dep.delete();

    // for (const dep of Yarn.dependencies({ ident: 'ts-node' })) dep.update(`1.2.3`);

    // Produziert "Missing field"
    // for (const workspace of Yarn.workspaces()) {
    //   // workspace.set('engines.node', `20.0.0`);
    //   // workspace.set('typescript', `4.9.5`);
    //   console.log(`cwd: ${workspace.cwd}, ident: ${workspace.ident}`)
    // }
  },
});
