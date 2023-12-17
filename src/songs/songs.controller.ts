import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { SongsService } from './songs.service';


@Controller({
    path: 'songs',
    version: '1',
})
export class SongsController {
    constructor(private readonly songsService: SongsService) {
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.songsService.findOne(id);
    }
}
