import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from './config/config.type';
import validationOptions from './utils/validation-option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Load configuration service
  const configService = app.get(ConfigService<AllConfigType>);

  app.enableShutdownHooks();

  //Set a prefix for all routes
  app.setGlobalPrefix(
    configService.getOrThrow('app.apiPrefix', { infer: true }),
    {
      exclude: ['/'],
    },
  );

  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe(validationOptions));



  // Create a new logger
  const logger = new Logger('bootstrap');

  // Log useful info
  logger.log(`App name: ${configService.get('app.name', { infer: true })}`);
  logger.log(`Node environment (NODE_ENV): ${configService.get('app.nodeEnv', { infer: true })}`);
  logger.log(`Backend domain: ${configService.get('app.backendDomain', { infer: true })}`);
  logger.log(`App port: ${configService.get('app.port', { infer: true })}`);
  logger.log(`App prefix: ${configService.get('app.apiPrefix', { infer: true })}`);
  logger.log(`App fallbackLanguage: ${configService.get('app.fallbackLanguage', { infer: true })}`);
  logger.log(`App headerLanguage: ${configService.get('app.headerLanguage', { infer: true })}`);


  await app.listen(configService.getOrThrow('app.port', { infer: true }));
}

void bootstrap()
