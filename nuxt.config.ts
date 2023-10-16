const websiteUrl = 'https://colthands.dev'

export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/color-mode',
    ],
    robots: {
        allow: '/'
    },
    devtools: { enabled: false },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'default'
        }
    },
    typescript: {
        strict: true
    },
    routeRules: {
        '/blog/**': { swr: true }
    },
    runtimeConfig: {
        public: {
            posthogPublicKey: 'phc_h4lVplILWIY7UlOfGIp9vjHlwHOA1697FEuiPAuwc2L',
            posthogHost: 'https://app.posthog.com',
            websiteUrl
        }
    },
    content: {
        highlight: {
            theme: 'github-dark'
        },
        markdown: {
            toc: {
                depth: 2,
                searchDepth: 2
            }
        }
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
    }
})
