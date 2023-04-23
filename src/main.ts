import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // DONT DO THIS IN PROD CORE SETTINGS ARE MORE SOPHISTICATED
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
