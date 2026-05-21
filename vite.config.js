import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// See https://vitejs.dev/config/ for detailed configuration options.
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            // Let the plugin inject a service worker registration script in production builds.
            registerType: 'autoUpdate',

            // Enable PWA behavior during `vite dev` so you can test installability locally.
            devOptions: {
                enabled: true,
            },

            // NOTE: Removed 'base' here to inherit the default root settings.
            // We do not need a subpath like '/sleepgo/' anymore.

            // Icons are served from /public; list them here so they are included in the build.
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],

            manifest: {
                name: 'SleepGo',
                short_name: 'SleepGo',
                description: 'SleepGo company homepage (USM CAT201 Assignment 2).',

                // UPDATED: Pointing to root '/' since the site is deployed at the domain root.
                start_url: '/',
                scope: '/',

                display: 'standalone',
                theme_color: '#0b1220',
                background_color: '#0b1220',

                // UPDATED: Removed '/sleepgo/' prefix from icon paths.
                icons: [
                    {
                        src: '/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
    // The base path for deployment. Set to '/' for root domain deployment.
    base: '/',
})
