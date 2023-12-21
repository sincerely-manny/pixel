module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        // ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
        issuer: /\.(js|jsx|ts|tsx|css)$/,
        type: 'asset',
        loader: 'svgo-loader',
        // use: [
        // {
        //   loader: require.resolve('url-loader'),
        //   options: {
        //     limit: 512,
        //     publicPath: '/_next/static/images',
        //     outputPath: 'static/images',
        //     fallback: require.resolve('file-loader'),
        //   },
        // },
        // {
        //   loader: require.resolve('svgo-loader'),
        // },
        // ],
      },
      {
        test: /\.svg$/i,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        issuer: fileLoaderRule.issuer,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  'prefixIds',
                  'removeDimensions',
                ],
              },
            },
          },
        ],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
