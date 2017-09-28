var path = require('path')
var glob = require('glob')

var build = {
  env: require('./prod.env'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  productionGzip: false,
  productionGzipExtensions: ['js', 'css']
}

function getEntry(globPath) {
  var entries = {},basename;

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    entries[basename] = entry;
  });
  return entries;
}

var pages = getEntry('src/pages/**/*.html');

//入口 index: path.resolve(__dirname, '../dist/index.html')
for (var pathname in pages) {
  build[pathname] = path.resolve(__dirname, '../dist/' + pathname + '.html')
}

module.exports = {
  build:build,
  // build: {
  //   env: require('./prod.env'),
  //   index: path.resolve(__dirname, '../dist/index.html'),
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   productionSourceMap: true,
  //   productionGzip: false,
  //   productionGzipExtensions: ['js', 'css'],
  //   bundleAnalyzerReport: process.env.npm_config_report
  // },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
            '/api': {
        target: 'http://open.energymost.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    cssSourceMap: false
  }
}


//var proxyMiddleware = require('http-proxy-middleware')
////拦截一切/api的请求，后台代理获取数据，返回到前端
//var proxyTable = {
//      '/api': {
//        target: 'http://open.energymost.com',
//        changeOrigin: true,
//        pathRewrite: {
//          '^/api': '/GetRealTimeData'
//        }
//      }
//    };
//Object.keys(proxyTable).forEach(function (context) {
//  var options = proxyTable[context]
//  if (typeof options === 'string') {
//    options = { target: options }
//  }
//  app.use(proxyMiddleware(context, options))
//})

