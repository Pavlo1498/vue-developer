module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
    root: true,

    parserOptions: {
        ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    },

    env: {
        node: true,
        browser: true,
    },

    // Rules order is important, please avoid shuffling them
    extends: [
        // Base ESLint recommended rules
        // 'eslint:recommended',

        // Uncomment any of the lines below to choose desired strictness,
        // but leave only one uncommented!
        // See https://eslint.vuejs.org/rules/#available-rules
        "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
        // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
        // 'plugin:vue/vue3-recommended',
        // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

        // https://github.com/prettier/eslint-config-prettier#installation
        // usage with Prettier, provided by 'eslint-config-prettier'.
        "prettier",
    ],

    plugins: [
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
        // required to lint *.vue files
        "vue",

        // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
        // Prettier has not been included as plugin to avoid performance impact
        // add it as an extension for your IDE
    ],

    globals: {
        ga: "readonly", // Google Analytics
        cordova: "readonly",
        __statics: "readonly",
        __QUASAR_SSR__: "readonly",
        __QUASAR_SSR_SERVER__: "readonly",
        __QUASAR_SSR_CLIENT__: "readonly",
        __QUASAR_SSR_PWA__: "readonly",
        process: "readonly",
        Capacitor: "readonly",
        chrome: "readonly",
    },

    // add your custom rules here
    rules: {
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        "max-len": [
            "error",
            {
                code: 140,
                ignoreTrailingComments: true,
            },
        ],
        "no-trailing-spaces": [
            "error",
            {
                ignoreComments: true,
            },
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "always",
            },
        ],
        quotes: ["error", "single", { avoidEscape: true }],
        "array-bracket-spacing": ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        semi: ["error", "always"],
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: {
                    max: 2,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        "vue/multiline-html-element-content-newline": [
            "error",
            {
                ignoreWhenEmpty: true,
                allowEmptyLines: true,
            },
        ],
        "vue/first-attribute-linebreak": [
            "error",
            {
                singleline: "ignore",
                multiline: "below",
            },
        ],
        "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
        "vue/attributes-order": [
            "error",
            {
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    ["UNIQUE", "SLOT"],
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT",
                ],
                alphabetical: false,
            },
        ],
        "comma-dangle": ["error", "never"],
        "arrow-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
        "generator-star-spacing": [
            "error",
            {
                before: true,
                after: false,
            },
        ],
        "no-confusing-arrow": [
            "error",
            {
                allowParens: true,
            },
        ],
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": ["error", "always"],
        "prefer-arrow-callback": [
            "error",
            {
                allowNamedFunctions: true,
            },
        ],
        "prefer-const": "error",
        "prefer-destructuring": [
            "error",
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
            },
        ],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "rest-spread-spacing": ["error", "never"],
        "template-curly-spacing": ["error", "never"],
        "yield-star-spacing": [
            "error",
            {
                before: true,
                after: false,
            },
        ],
        "prefer-promise-reject-errors": "off",
        "vue/no-lifecycle-after-await": "off",
        "vue/no-expose-after-await": "off",
        "arrow-body-style": "off",

        // allow debugger during development only
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    },
};
