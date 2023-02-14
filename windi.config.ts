import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';
import typographyPlugin from 'windicss/plugin/typography';
import lineClampPlugin from 'windicss/plugin/line-clamp';
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio';

export default defineConfig({
    extract: {
        include: [
            'resources/**/*.{tsx,html,js,ts}',
        ],
    },
    theme: {
        extend: {

        },
    },
    plugins: [
        formsPlugin,
        typographyPlugin(),
        lineClampPlugin,
        aspectRatioPlugin,
    ],
})