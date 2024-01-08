module.exports = {
    defaultNamespace: 'translation',
    lexers: {
      js: ['JsxLexer'], // we're writing jsx inside .js files
      default: ['JavascriptLexer'],
    },
    locales: ['en', 'lv', 'es'], // An array of the locales in your applications
    output: 'public/locales/$LOCALE/$NAMESPACE.json', // Supports $LOCALE and $NAMESPACE injection
    // Supports JSON (.json) and YAML (.yml) file formats
    // Where to write the locale files relative to process.cwd()
    input: [ 'src/*.js', ],
  }