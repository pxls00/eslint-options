module.exports = {
  root: true,
  env: {
    'es6': true
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-multi-spaces": ["error"],   // multiple spaces in a row that are not used for indentation are typically mistakes
    semi: ['error', 'always'],   // requires or disallows semicolons instead of ASI
    quotes: ['error', 'single'],   // enforces the consistent use of either single quotes
    "no-multiple-empty-lines": ["error", {   // Disallows multiple empty lines.        
      "max": 1,   // enforces a maximum number of consecutive empty lines
      "maxEOF": 0,  // enforces a maximum number of consecutive empty lines at the end of files
      "maxBOF": 0   // enforces a maximum number of consecutive empty lines at the beginning of files
    }],
    "space-before-blocks": ["error", { "functions": "always", "keywords": "never", "classes": "always" }],   //disallows space before blocks
    "space-before-function-paren": ['error', 'never'],   // disallows a space before function parenthesis
    indent: ["error", 2],   // enforces consistent indentation.
    "vue/max-attributes-per-line": ['error', { max: 2 }],   // enforces a maximum number of statements allowed per line.
    "array-bracket-spacing": ['error', 'never'],   // disallows or enforce spaces inside of brackets.
    "comma-dangle": ["error", "never"],   // disallows trailing commas in object and array literals.
    "max-params": ['error', 4],   // enforces a maximum number of parameters in function definitions.
    "array-element-newline": ["error", "never"],   // enforces line breaks between array elements.
    "array-element-newline": ['error', { "multiline": true, "minItems": 3 }],   // enforces line breaks between array elements.


    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
