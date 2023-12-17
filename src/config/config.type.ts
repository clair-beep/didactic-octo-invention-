export type AppConfig = {
    nodeEnv: string;
    name: string;
    workingDirectory: string;
    backendDomain: string;
    port: number;
    apiPrefix: string;
    fallbackLanguage: string;
    headerLanguage: string;
};

export type AppleConfig = {
    appAudience: string[];
};

export type AuthConfig = {
    secret?: string;
    expires?: string;
    refreshSecret?: string;
    refreshExpires?: string;
};

export type DatabaseConfig = {

};


export type FileConfig = {
    driver: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    awsDefaultS3Bucket?: string;
    awsDefaultS3Url?: string;
    awsS3Region?: string;
    maxFileSize: number;
};

export type GoogleConfig = {
    clientId?: string;
    clientSecret?: string;
};

export type MailConfig = {
    port: number;
    host?: string;
    user?: string;
    password?: string;
    defaultEmail?: string;
    defaultName?: string;
    ignoreTLS: boolean;
    secure: boolean;
    requireTLS: boolean;
};

export type GeniusConfig = {
    clientId?: string;
    clientSecret?: string;
    clientAccessToken?: string;
    clientUrl?: string;
};

export type AllConfigType = {
    app: AppConfig;
    apple: AppleConfig;
    auth: AuthConfig;
    database: DatabaseConfig;
    file: FileConfig;
    google: GoogleConfig;
    mail: MailConfig;
    genius: GeniusConfig;
};
