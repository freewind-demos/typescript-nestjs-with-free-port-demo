import { NestFactory } from '@nestjs/core';
import portfinder from 'portfinder';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(await portfinder.getPortPromise());
  console.log(await app.getUrl())
}
bootstrap();
