import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

// song.dto.ts
export class SongDetailsDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(120)
    title: string;

    @IsString()
    @MinLength(1)
    @MaxLength(60)
    artist: string;
}
