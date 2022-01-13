export default {

    // Global page headers: https://go.nuxtjs.dev/config-head
    head : {
        title     : 'Главная страница',
        htmlAttrs : {
            lang : 'ru',
        },
        meta : [
            { charset: 'utf-8' },
            {
                name : 'viewport', content : 'width=device-width, initial-scale=1',
            },
            {
                hid : 'description', name : 'description', content : '',
            },
        ],
        link : [
            {
                rel : 'icon', type : 'image/x-icon', href : '/favicon.ico',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css : [
        '~/assets/styles/main.scss',
    ],

    styleResources : {
        scss : [
            '~/assets/styles/ds-system/ds.scss',
        ],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins : [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components : [{
        path       : '~/components',
        extensions : ['vue'],
    }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules : [

        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',

        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',

        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules : [

        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios : {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build : {
        // postcss : {

        //     // Add plugin names as key and arguments as value
        //     // Install them before as dependencies with npm or yarn
        //     plugins : {

        //         // Disable a plugin by passing false as value
        //         'postcss-import' : true,
        //         'postcss-url'    : false,
        //         'postcss-nested' : {},
        //     },
        //     preset : {

        //         // Change the postcss-preset-env settings
        //         autoprefixer : {
        //             grid : true,
        //         },
        //     },
        // },
    },

    storybook : {

    // Options
    },
};
