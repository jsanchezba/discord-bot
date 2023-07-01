import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NecordModule } from 'necord';
import { GatewayIntentBits } from 'discord.js';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUpdate } from './app.update';
import { AppCommands } from './app.commands';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env', '.env.development'],
            isGlobal: true,
        }),
        NecordModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                token: configService.get<string>('DISCORD_APP_TOKEN'),
                intents: [GatewayIntentBits.Guilds],
                development: [
                    configService.get<string>('DISCORD_GUILD_ID') ?? null,
                ],
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService, AppUpdate, AppCommands],
})
export class AppModule {}
