import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  // class validator
  app.useGlobalPipes(new ValidationPipe());
  // swagger
  const config = new DocumentBuilder()
  .setTitle('cats example')
  .setDescription('The Produc API description')
  .setVersion('1.0')
  .addTag('product')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
=======
  //class validator
  app.useGlobalPipes(new ValidationPipe());

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Product example')
    .setDescription('The Product API description')
    .setVersion('1.0')
    .addTag('product')
    .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
  await app.listen(3000);
}
bootstrap();
