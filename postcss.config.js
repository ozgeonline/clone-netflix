module.exports = {
  plugins: {
    tailwindcss: {},
    // autoprefixer: {},
    // 'postcss-reporter': {
    //   clearReportedMessages: true,
    // },
  },
}

// module.exports = {
//   plugins: [
//     tailwindcss,
//     autoprefixer,
//     [
//       '@fullhuman/postcss-purgecss',
//       {
//         content: ['./pages/**/*.js', './components/**/*.js'],
//         defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//         safelist: {
//           standard: ['html', 'body'],
//           deep: [],
//           greedy: []
//         }
//       }
//     ]
//   ],
// }
