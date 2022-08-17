module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  // 指定React版本号为自动检测 否则会提示警告
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    semi: ["error", "always"]
  }
};
