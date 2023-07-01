import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class AppCommands {
    @SlashCommand({
        name: 'ping',
        description: 'Ping-Pong Command',
    })
    public async onPing(@Context() [interaction]: SlashCommandContext) {
        return interaction.reply({ content: 'Pong!' });
    }

    @SlashCommand({
        name: 'bye',
        description: 'Bye Command',
    })
    public async onBye(@Context() [interaction]: SlashCommandContext) {
        await interaction.reply({ content: `Ok, i'll shut down` });

        return process.exit(0);
    }
}
