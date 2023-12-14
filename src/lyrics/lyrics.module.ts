import { Module } from '@nestjs/common';
import { LyricsController } from './lyrics.controller';
import { LyricsService } from './lyrics.service';
import { GeniusService } from 'src/genius/genius.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GeniusModule } from 'src/genius/genius.module';

@Module({
  imports: [ConfigModule, GeniusModule],
  controllers: [LyricsController],
  providers: [LyricsService]
})
export class LyricsModule { }
