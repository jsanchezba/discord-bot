import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(app.get(ConfigService).get<string>('DISCORD_APP_PORT'));
}
bootstrap();
