const {
    resolve
} = require('path')
const webpack = require('webpack')

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-jquery',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        script: [],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }, ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        /* **supro bootstrap */
        "@/node_modules/bootstrap/dist/css/bootstrap.css",
        /* **supro font-awesome */
        '@/node_modules/font-awesome/css/font-awesome.min.css',
        /* **jquery ui */
        '@/static/jquery/jquery-ui/jquery-ui.min.css',
        /* **light gallery */
        '@/static/lightGallery-master/dist/css/lightgallery.min.css',
        /* **owl carousel*/
        '@/static/owl-carousel/css/owl.carousel.css',
        /* **select2 - infite scroll */
        '@/static/select2/dist/css/select2.min.css',
        /* **wedding house basic css */
        '@/static/wedding-house/css/style.css',
        /* **wedding house css */
        '@/static/wedding-house/css/home-default.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
        src: "@/plugins/supro.js",
        ssr: false
    }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/bootstrap-vue', {
            css: false
        }],
    ],
    axios: {
        baseURL: 'http://localhost:3080',
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        /*
         ** Run ESLint on save
         */
        vendor: ['supro.js'],
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ],
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /(node_modules)/
                })
            }
        }
    }
}