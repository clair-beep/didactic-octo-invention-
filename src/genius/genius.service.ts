import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Song } from './schema/song.interface';

@Injectable()
export class GeniusService {
    private readonly logger = new Logger(GeniusService.name)
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) { }

    async findOne(id: string): Promise<Song[]> {
        // credentials from Genius API
        const clientUrl = this.configService.get('genius.clientUrl');
        const clientAccessToken = this.configService.get('genius.clientAccessToken');

        const { data } = await firstValueFrom(
            this.httpService.get(`${clientUrl}/songs/${id}?access_token=${clientAccessToken}`).pipe(
                catchError((error: AxiosError) => {
                    this.logger.error(error.response.data);
                    throw 'An error happened!';
                }),
            ),
        );
        return data;
    }

    async search(query: string): Promise<Song[]> {
        // credentials from Genius API
        const clientUrl = this.configService.get('genius.clientUrl');
        const clientAccessToken = this.configService.get('genius.clientAccessToken');

        const { data } = await firstValueFrom(
            this.httpService.get(`${clientUrl}/search?q=${query}&access_token=${clientAccessToken}`).pipe(
                catchError((error: AxiosError) => {
                    this.logger.error(error.response.data);
                    throw 'An error happened!';
                }),
            ),
        );
        return data;
    }


}
