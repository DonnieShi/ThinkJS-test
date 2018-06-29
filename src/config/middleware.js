const path = require('path');
const isDev = think.env === 'development';

module.exports = [
  {
    handle: 'meta',// 中间件处理函数  显示一些 meta 信息，如：发送 ThinkJS 的版本号，接口的处理时间等等
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource', //处理静态资源，生产环境建议关闭，直接用 webserver 处理即可。
    enable: isDev,// 是否开启当前中间件
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace', //处理报错，开发环境将详细的报错信息显示处理，也可以自定义显示错误页面。
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload', //处理表单提交和文件上传
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    handle: 'router', //路由解析，包含自定义路由解析
    options: {}
  },
  'logic',//logic 调用，数据校验
  'controller' //controller 和 action 调用
];
