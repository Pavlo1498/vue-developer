
import { fileURLToPath } from 'node:url';
import { configure } from 'quasar/wrappers';
import * as dotenv from 'dotenv';

const setAliasPath = (path) => fileURLToPath(new URL(path, import.meta.url));

const env = dotenv.config({ path: `.env.${process.env.NODE_ENV}` }).parsed;

export default configure(() => ({
        css: [
            'app.scss'
        ],
        extras: [
            'roboto-font',
            'material-icons'
        ],
        build: {
            target: {
                browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
                node: 'node20'
            },
            alias: {
            },
            vueDevtools: false,
            vueRouterMode: 'history',
            useFilenameHashes: true,
            analyze: false,
            env,

            extendViteConf (viteConf) {
                viteConf.css = viteConf.css || {};
                viteConf.css.preprocessorOptions = viteConf.css.preprocessorOptions || {};
                viteConf.css.preprocessorOptions.scss = viteConf.css.preprocessorOptions.scss || {};

                Object.assign(viteConf.resolve.alias, {
                    components: setAliasPath('./src/components'),
                    helpers: setAliasPath('./src/helpers'),
                    stores: setAliasPath('./src/stores'),
                    router: setAliasPath('./src/router')
                });
            },
            vitePlugins: [
                ['vite-plugin-checker', {}, { server: false }
                ],
                ['vite-svg-loader']
            ]
        },

        devServer: {
            https: true,
            port: 5173,
            open: false
        },

        server: {
            host: true,
            https: true
        },

        pwa: {
            workboxMode: 'generateSW', // or 'injectManifest'
            injectPwaMetaTags: true,
            swFilename: 'sw.js',
            manifestFilename: 'manifest.json',
            useCredentialsForManifestTag: false
        },
        capacitor: {
            hideSplashscreen: true
        },
        electron: {
            bundler: 'builder', // set here instead of using command line flag --bundler
            builder: {
              appId: 'com.electron.myelectronapp',
              win: {
                target: 'nsis'
              },
              publish: {
                'provider': 's3',
                'bucket': 'myS3bucket'
              }
            }
        },
        bex: {
            contentScripts: [
                'my-content-script'
            ]
        },
        framework: {
            plugins: [
                'Notify'
            ],
            lang: 'ru',
            config: {
                lang: {
                    noHtmlAttrs: true
                }
            }
        }
}));
