const { TOKEN } = require('./util/config');
const GotoCLient = require('./structures/GotoClient');

let client = new GotoCLient({
    prefix: '+'
});

client.start();