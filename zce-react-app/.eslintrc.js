module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'space-before-function-paren': 0
    // 'react/jsx-uses-react': 2,
    // 'react/jsx-uses-vars': 2
  }
  // plugins: ['react']
}
