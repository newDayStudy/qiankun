module.exports = {
  webpack: (config) => {
    config.output.library = `ReactMicroApp`;
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    
    console.log('webpack', config)
    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.open = false;
    // config.watchContentBase = false;
    config.liveReload = false;
    // config.client.webSocketURL.port = 10300
    console.log('devServer', config)
    return config;
  },
};