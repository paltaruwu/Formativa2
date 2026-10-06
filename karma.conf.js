export default function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/**/*.test.jsx', watch: false }
    ],
    preprocessors: {
      'src/**/*.test.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ]
              }
            }
          },
          {
            test: /\.(jpg|jpeg|png|gif|svg)$/i,
            type: 'asset/inline'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack'
    ],
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: false
  });
};