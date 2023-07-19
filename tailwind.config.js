/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dev/public/*.html'],
    theme: {
        extend: {
            fontFamily: {
                pingfang: 'pingfang',
                lishu: 'lishu',
            },
            colors: {
                btn: '#0079FE',
                shadow: '#666666',
            },
        },
    },
    plugins: [],
};
