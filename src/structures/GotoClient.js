const { embed } = require('../util/functions');
const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const { TOKEN, MONGOSTRING } = require('../util/config');
const mongoose = require('mongoose');

module.exports = class GotoClient extends AkairoClient {
    constructor(config = {}) {
        super(
            {ownerID: ['716727691419582546', '496702143613370368', '880882719821803530']},
            {
                allowedMentions: {
                    parse: ['roles', 'everyone', 'users'],
                    repliedUser: false
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTIONS', 'USER'],
                presence: {
                    status: 'dnd',
                    activities: [
                        {
                            name: 'L.S.P.D BOT V2',
                            type: 'STREAMING',
                            url: 'https://lspdg4l.xyz/'
                        }
                    ]
                },
                intents: 32767
            }
        );

        this.commandHandler = new CommandHandler(this, {
            allowedMentions: true,
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './src/commands/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        });

        // this.client.functions.embed()
        this.functions = {
            embed: embed
        }


    }

    init() {
        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        console.log(`Commandes -> ${this.commandHandler.modules.size}`);
        this.listenerHandler.loadAll();
        console.log(`Listeners -> ${this.listenerHandler.modules.size}`);
    }

    async start() {
        try {
            await mongoose.connect(process.env.mongostring, {
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            });
            console.log("DB connectée");
        } catch(e) {
            console.log("DB pas connectée! \n\n", e)
        }

        await this.init();
        return this.login(process.env.token)
    }

}