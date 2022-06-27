import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1655462425789_8605',
  koa: {
    port: 7001,
  },

  orm: {
    type: 'mysql',
    host: 'rm-bp1l12qy1dz36p714bo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'qiduoduo',
    password: 'Qiduoduo123',
    database: 'qiduoduo-test',
    synchronize: false,     // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
  },

  jwt: {
    secret: '111111',
    expiresIn: '2d'
  },
  cors:{
      credentials:false,
      origin: "*"
  }

} as MidwayConfig;
