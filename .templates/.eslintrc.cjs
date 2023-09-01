/* eslint-env node */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended', 'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "project": ["./tsconfig.json"]
    },
    plugins: [
        '@typescript-eslint'
    ],
    "rules": {
        // disable the rule for all files
        "@typescript-eslint/explicit-function-return-type": "off"
    },
    "overrides": [
        {
            // enable the rule specifically for TypeScript files
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
            "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": "error"
            }
        }
    ],
    ignorePatterns: [
        "src/index.ts",
        // "test/**/*.specs.ts",
        "lib/*",
        "tools/*",
        "webpack.*.js",
        "jest.setup.js",
        "service-worker.js",
        "*.config.js",
    ],
};
