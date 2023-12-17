import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { GeniusService } from 'src/genius/genius.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GeniusModule } from 'src/genius/genius.module';

@Module({
  imports: [ConfigModule, GeniusModule],
  controllers: [SongsController],
  providers: [SongsService]
})
export class SongsModule { }
