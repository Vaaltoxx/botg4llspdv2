const { MessageEmbed } = require("discord.js")

module.exports = {
    embed: function() {
        return new MessageEmbed().setColor('#0089e')
        .setFooter('L.S.P.D | BOT', 'https://cdn.discordapp.com/attachments/926623217995616258/926873074140344400/26c5934d98e45325dd0b5faba01d18d7.png')
        .setTimestamp();
    }
}