module.exports = {
  extends: ["vue", /* your other extends */],
  plugins: ["vue"],
  rules: {
    /* your overrides -- vue/jsx-uses-vars is included in eslint-config-vue */
    
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
  }
