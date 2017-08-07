<<<<<<< HEAD


// ESLint 규칙:
// http://eslint.org/docs/rules/
// https://goo.gl/2P8squ
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "globals": {
      "Vue": true
    },
    "extends": "eslint:recommended",
    "rules": {
=======
module.exports = {
  extends: ["vue", /* your other extends */],
  plugins: ["vue"],
  rules: {
    /* your overrides -- vue/jsx-uses-vars is included in eslint-config-vue */
    
>>>>>>> 112664a99b9aa7453d9adf5ef0557a9adb3902d9
        "no-console": 0,
        "no-unused-vars": 0,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
<<<<<<< HEAD
};
=======
  }
>>>>>>> 112664a99b9aa7453d9adf5ef0557a9adb3902d9
