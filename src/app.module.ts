import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LyricsModule } from './lyrics/lyrics.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { GeniusController } from './genius/genius.controller';
import { GeniusModule } from './genius/genius.module';
import geniusConfig from './config/genius.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [
      appConfig,
      geniusConfig
    ],
    envFilePath: ['.env'],
  }),
    LyricsModule,
    GeniusModule],
  controllers: [AppController, GeniusController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //Apply logger moddleware to all routes
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
