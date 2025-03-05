module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,  // .scss 파일을 처리
        use: [
          'style-loader',    // CSS를 DOM에 삽입
          'css-loader',      // CSS를 로드하고 해석
          'postcss-loader',  // PostCSS와 Autoprefixer 적용
          'sass-loader'      // SCSS를 CSS로 변환
        ]
      },
      {
        test: /\.css$/,  // .css 파일을 처리
        use: [
          'style-loader',    // CSS를 DOM에 삽입
          'css-loader',      // CSS를 로드하고 해석
          'postcss-loader'   // PostCSS와 Autoprefixer 적용
        ]
      }
    ]
  }
}
