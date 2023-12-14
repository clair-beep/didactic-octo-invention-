import { Injectable } from '@nestjs/common';
import { GeniusService } from 'src/genius/genius.service';
import { SongDetailsDto } from './dto/song.dto';

@Injectable()
export class LyricsService {
    constructor(private readonly geniusService: GeniusService) { }

    async findOne(songDetails: SongDetailsDto) {
        console.log(`songInfo: ${songDetails}`);


        return 'We did it!'
    }


}



