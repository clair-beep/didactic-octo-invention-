import { Injectable } from '@nestjs/common';
import { GeniusService } from 'src/genius/genius.service';

@Injectable()
export class SongsService {
    constructor(private readonly geniusService: GeniusService) { }
    async findOne(id: string) {
        const getSong = 'Success, get son!';
        console.log(getSong);

        const data = await this.geniusService.findOne(id); // await here

        return data;
    }

}



