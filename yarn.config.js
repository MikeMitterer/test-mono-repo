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

    for (const dep of Yarn.dependencies({ ident: 'typescript' })) dep.update(`^5.2.2`);
    // for (const dep of Yarn.dependencies({ ident: 'ts-node' })) dep.update(`1.2.3`);

    // Produziert "Missing field"
    // for (const workspace of Yarn.workspaces()) {
    //   // workspace.set('engines.node', `20.0.0`);
    //   // workspace.set('typescript', `4.9.5`);
    //   console.log(`cwd: ${workspace.cwd}, ident: ${workspace.ident}`)
    // }
  },
});
