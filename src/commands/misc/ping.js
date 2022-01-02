const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['ping'] 
        });
    }

    async exec(message) {
        const sentMessage = await message.channel.send('Pong!');
        const timeStamp = message.editedTimestamp ? message.editedTimestamp : message.createdTimestamp;
        const botLatency = `${'```'}\n ${Math.round(sentMessage.createdTimestamp - timeStamp)}ms ${'```'}`;
        const apiLatency = `${'```'}\n ${Math.round(message.client.ws.ping)}ms ${'```'}`;

        const embed = this.client.functions.embed()
            .setTitle('L.S.P.D BOT | PING')
            .addField('Latence du bot', botLatency, true)
            .addField('Latence de l\'API', apiLatency, true)   
            
        await sentMessage.edit({
            content: null,
            embeds: [embed]
        })
    }
}

module.exports = PingCommand;