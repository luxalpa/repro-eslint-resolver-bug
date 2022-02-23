module.exports = {
  extends: [
    'plugin:import/recommended',
  ],
  "rules": {
    // turn on errors for missing imports
    "import/no-unresolved": "error"
  },
  plugins: ['import'],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
