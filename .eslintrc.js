module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ["plugin:react/recommended", "airbnb"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    rules: {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "react/function-component-definition": "off",
        "arrow-parens": ["error", "as-needed"],
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "object-curly-newline": "off",
        semi: ["error", "never"],
        quotes: ["error", "double"],
        "linebreak-style": "off",
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "never",
            },
        ],
        "react/button-has-type": "off",
        "operator-linebreak": [
            "error",
            "none",
            { overrides: { "=": "after", "?": "before", ":": "before", "&&": "after" } },
        ],
        "max-len": ["error", { ignoreComments: true, code: 120 }],
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies,
        "no-param-reassign": "off",
        "no-undef": "off",
        "implicit-arrow-linebreak": "warn",
        "react/jsx-no-bind": "off",
        "react/jsx-wrap-multilines": [
            "error",
            {
                declaration: "parens",
                assignment: "parens",
                return: "parens",
                arrow: "parens",
                condition: "ignore",
                logical: "ignore",
                prop: "ignore",
            },
        ],
        "no-control-regex": 0,
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
            rules: {
                "max-len": "off",
            },
        },
    ],
}