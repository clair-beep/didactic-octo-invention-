import { IsString } from "class-validator";

export class SongsDto {
    @IsString()
    readonly name: string;
}
