const { Client, GatewayIntentBits } = require('discord.js');
const { Collection } = require('discord.js');

const config = require('./config');
const tokens = config.app.tokens;

const clients = new Collection();

tokens.forEach(token => {
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.MessageContent
        ],
        disableMentions: 'everyone',
    });

    client.commands = new Collection();
    // ... تحميل الأوامر والأحداث وإعداد العميل

    clients.set(token, client);

    client.login(token);
});