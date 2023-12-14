// songs.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { SongDetailsDto } from './dto/song.dto';

@Controller({
    path: 'lyrics',
    version: '1',
})
export class LyricsController {
    constructor(private readonly lyricsService: LyricsService) { }

    @Post()
    findOne(@Body() songDetails: SongDetailsDto) {

        return this.lyricsService.findOne(songDetails);
    }
}
