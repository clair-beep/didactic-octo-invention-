import { registerAs } from '@nestjs/config';
import { GeniusConfig } from './config.type';
import { IsOptional, IsString, IsUrl } from 'class-validator';
import validateConfig from 'src/utils/validate-config';

class EnvironmentVariablesValidator {
    @IsString()
    @IsOptional()
    GENIUS_CLIENT_ID: string;

    @IsString()
    @IsOptional()
    GENIUS_CLIENT_SECRET: string;

    @IsString()
    @IsOptional()
    GENIUS_CLIENT_ACCESS_TOKEN: string;

    @IsUrl({ require_tld: false })
    @IsOptional()
    GENIUS_CLIENT_URL: string;

}

export default registerAs<GeniusConfig>('genius', () => {
    validateConfig(process.env, EnvironmentVariablesValidator);

    return {
        clientId: process.env.GENIUS_CLIENT_ID,
        clientSecret: process.env.GENIUS_CLIENT_SECRET,
        clientAccessToken: process.env.GENIUS_CLIENT_ACCESS_TOKEN,
        clientUrl: process.env.GENIUS_CLIENT_URL,
    };
});
