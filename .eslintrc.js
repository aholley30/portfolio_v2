module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended', // Extend with Vue 3 recommended rules
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      // Your custom rules or overrides go here
      "vue/html-indent": ["warn", 4],
    },
  };
  