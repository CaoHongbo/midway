import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    // 只创建一次 app，可以复用
    try {
      // 由于Jest在BeforeAll阶段的error会忽略，所以需要包一层catch
      // refs: https://github.com/facebook/jest/issues/8688
      app = await createApp<Framework>();
    } catch(err) {
      console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    // close app
    await close(app);
  });

  it('正常登录测试', async () => {
    const result = await createHttpRequest(app).post('/api/user/login').send({ username: "jack", password: "redballoon"  })
    expect(result.status).toBe(200)
    expect(JSON.parse(result.text).code).toBe(200)
  });

  it( '异常登录测试', async ()=>{
    const result = await createHttpRequest(app).post('/api/user/login').send({ username: "jack", password: "aaa"  })
    expect(result.status).toBe(200)
    expect(JSON.parse(result.text).code).toBe(400)
  })

});

