const prettierConfig = require("./prettier.config");

module.exports = {
    extends: ["react-app", "react-app/jest"],
    plugins: ["react", "@typescript-eslint", "react-hooks", "prettier", "jest"],
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
        es6: true,
    },
    rules: {
        "@typescript-eslint/no-empty-function": "warn",
        "newline-before-return": "error",
        "import/no-anonymous-default-export": 0,
        "no-unused-vars": "error",
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": 0,
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    Function: false,
                    "{}": false,
                },
            },
        ],
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
    parser: "@typescript-eslint/parser",
    globals: {
        process: true,
        Promise: true,
    },
};
