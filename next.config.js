module.exports = {
  webpack: (config) => {
    // Добавляем поддержку для CSS файлов
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: /node_modules/,
    });

    // Добавляем поддержку для бинарных файлов (шрифты, изображения и др.)
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/assets/',
            publicPath: '/_next/static/assets/',
          },
        },
      ],
    });

    return config;
  },
};