const { Command } = require('discord-akairo');


class HelpCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help']
        });
    }


     exec(message) {

        return message.channel.send({ embeds: [ 
            this.client.functions.embed()
                .setTitle("**`                      L.S.P.D HELP                      `**")
                .addField('+help', 'Affiche toutes les commandes du bot')
                .addField('+ping', 'Vous donne la latence du bot en ms')
                .addField('+blacklist <joueur> (STEAM_ID) ou +bl <joueur> (STEAM_ID)', 'Met un joueur dans le <#925125039081275444>')
         ]});
        }

    }

module.exports = HelpCommand;