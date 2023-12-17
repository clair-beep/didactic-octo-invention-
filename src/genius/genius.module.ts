import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GeniusService } from './genius.service';

@Module({
    imports: [ConfigModule, HttpModule],
    providers: [
        GeniusService,
        {
            provide: 'GeniusService',
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('genius.clientAccessToken', { infer: true }),
            }),
            inject: [ConfigService],
        },
    ],
    exports: [GeniusService],
})
export class GeniusModule { }
