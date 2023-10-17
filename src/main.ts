/*
 * @Author: sroxck
 * @Date: 2023-10-12 10:03:18
 * @LastEditors: sroxck
 * @LastEditTime: 2023-10-17 15:01:20
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
function MiddleWareTest(req, res, next) {
  console.log('全局的中间件');
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(MiddleWareTest);
  const config = new DocumentBuilder()
    .setTitle('wxhtml')
    .setDescription('小程序用户监控接口')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // app.enableCors();
  await app.listen(3000);
}
bootstrap();
