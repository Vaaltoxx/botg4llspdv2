const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class BlacklistCommand extends Command {
    constructor() {
        super('blacklist', {
           aliases: ['blacklist', 'bl'],
           ownerOnly: true,
           args: [
               { id: 'reason', type:'string', match: 'restContent' }
               
           ] 
        });
    }
    

    async exec(message, { member, reason } ) {
        const BlacklistChannel = this.client.channels.cache.get('925125039081275444');
        if (!reason) reason = "Raison non spécifiée ! ";    
        message.channel.send(`Le joueur (\` ${reason} \`) ajouté dans la \`Blacklist\``)
        
        
    const embed = this.client.functions.embed()
                .setTitle("**`                      BLACKLIST                      `**")
                .setDescription(`<a:siren_blue:926580901037604884>・**Nom du supérieur : ** <@${message.author.id}> \n \n <a:siren_red:926580858457034782>・**Nom du joueur blacklist :** ${reason} \n \n <a:siren_blue:926580901037604884>・**Date du blacklist :** <t:${parseInt(message.createdTimestamp / 1000)}>`)
    
    await BlacklistChannel.send({ embeds: [embed] }).catch(() => console.log(`Problème en envoyant le message sur la commande blacklist`))
    }
}

module.exports = BlacklistCommand;
