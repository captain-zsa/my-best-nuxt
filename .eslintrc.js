/* eslint-disable no-magic-numbers */

module.exports = {
    root : true,
    env  : {
        browser : true,
        node    : true,
        es6     : true,
    },
    parserOptions : {
        parser                      : 'babel-eslint',
        ecmaVersion                 : 2017,
        sourceType                  : 'module',
        allowImportExportEverywhere : true,
    },
    extends : [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    plugins : [
    ],

    // add your custom rules here
    rules : {
        'quote-props' : [
            1,
            'consistent',
        ],
        'vue/html-indent' : [
            'error',
            4,
        ],
        'vue/html-self-closing'                      : [0],
        'vue/custom-event-name-casing'               : ['error', 'kebab-case'],
        'vue/multiline-html-element-content-newline' : ['off'],
        'indent'                                     : [
            'error',
            4,
            {
                SwitchCase : 1,
            },
        ],
        'linebreak-style' : [
            'error',
            'unix',
        ],
        'quotes' : [
            'error',
            'single',
        ],
        'semi' : [
            'error',
            'always',
        ],
        'comma-dangle'         : ['error', 'always-multiline'],
        'no-console'           : 0,
        'no-debugger'          : 0,
        'block-scoped-var'     : 'error',
        'no-use-before-define' : ['error', {
            functions : false, classes : false,
        }],
        'complexity'        : ['error', 20],
        'no-empty-function' : [
            'warn',
        ],
        'no-labels'           : 'error',
        'no-floating-decimal' : 'error',
        'no-global-assign'    : 'error',
        'no-loop-func'        : 'error',
        'no-magic-numbers'    : ['error', {
            detectObjects : true, ignore : [-1, 0, 1, 2, 3, 4, 5, 10, 20, 24, 50, 60, 100, 400, 500, 1000, 200, 404],
        }],
        'no-multi-spaces' : [
            'error',
            {
                exceptions : {
                    Property             : true,
                    VariableDeclarator   : true,
                    AssignmentExpression : true,
                },
            },
        ],
        'no-multi-str'      : 'error',
        'no-new-wrappers'   : 'error',
        'no-new'            : 'error',
        'no-param-reassign' : ['error', { props: false }],
        'no-return-assign'  : ['error', 'always'],
        'no-self-compare'   : 'error',
        'no-useless-concat' : 'error',

        'vars-on-top' : 'error',
        'yoda'        : ['error', 'never', { onlyEquality: true }],

        'func-call-spacing'           : ['error', 'never'],
        'space-infix-ops'             : 'error',
        'space-before-function-paren' : ['error', 'never'],
        'space-before-blocks'         : [
            'error',
            {
                functions : 'always',
                keywords  : 'always',
                classes   : 'always',
            },
        ],
        'space-unary-ops' : [
            2,
            {
                words    : true,
                nonwords : false,
            },
        ],
        'object-curly-spacing' : ['error', 'always',
            {
                arraysInObjects  : true,
                objectsInObjects : true,
            },
        ],
        'max-params'                    : ['error', 4],
        'no-whitespace-before-property' : 'error',
        'key-spacing'                   : [
            'error',
            {
                singleLine : {
                    beforeColon : false,
                    afterColon  : true,
                },
                multiLine : {
                    beforeColon : true,
                    afterColon  : true,
                    align       : 'colon',
                    mode        : 'strict',
                },
            },
        ],
        'keyword-spacing' : ['error', { before: true }],
        'max-len'         : [
            2,
            120,
            {
                ignoreUrls             : true,
                ignoreTrailingComments : true,
                ignoreRegExpLiterals   : true,
            },
        ],
        'no-inner-declarations'        : 1,
        'one-var-declaration-per-line' : ['error', 'always'],
        'camelcase'                    : ['warn', { properties: 'never' }],
        'one-var'                      : ['warn', 'never'],
        'newline-after-var'            : ['error', 'always'],
        'newline-before-return'        : 'error',
        'object-curly-newline'         : [
            'warn',
            {
                ObjectExpression : {
                    consistent    : true,
                    minProperties : 2,
                },
                ObjectPattern : {
                    consistent : true,
                },
                ImportDeclaration : {
                    consistent : true,
                },
                ExportDeclaration : {
                    multiline : true,
                },
            },
        ],
        'object-property-newline' : ['error'],
        'operator-linebreak'      : ['error', 'before'],
        'brace-style'             : ['error', 'stroustrup'],
        'lines-around-directive'  : ['error', 'always'],
        'lines-around-comment'    : ['error',
            {
                beforeBlockComment : true,
                beforeLineComment  : true,
            },
        ],
        'spaced-comment' : ['error', 'always',
            {
                block   : { balanced: true },
                markers : ['global'],
            },
        ],
        'curly'                          : 'error',
        'semi-spacing'                   : 'error',
        'promise/always-return'          : 'warn',
        'promise/no-return-wrap'         : 'warn',
        'promise/param-names'            : 'warn',
        'promise/catch-or-return'        : 'warn',
        'promise/no-native'              : 'off',
        'promise/no-nesting'             : 'warn',
        'promise/no-promise-in-callback' : 'warn',
        'promise/no-callback-in-promise' : 'warn',
        'promise/avoid-new'              : 'warn',
        'promise/no-new-statics'         : 'warn',
        'promise/no-return-in-finally'   : 'warn',
        'promise/valid-params'           : 'warn',
    },
    settings : {
        polyfills : ['promises'],
    },
};
