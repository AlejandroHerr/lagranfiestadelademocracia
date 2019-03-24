module.exports = {
    parser: 'babel-eslint',
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
      },
    extends: ['airbnb','prettier'],
    rules: {
        'react/jsx-filename-extension': 0,
    },
    env: {
        jest: true,
        browser:true,
    }
};