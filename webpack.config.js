module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer"]
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer"]
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  // ... 기타 웹팩 설정
};