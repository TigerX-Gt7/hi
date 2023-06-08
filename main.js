const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { Player } = require('discord-player');
const config = require('./config');
const tokens = config.app.tokens;

const globalClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
    disableMentions: 'everyone',
});

globalClient.config = config;
globalClient.player = new Player(globalClient, globalClient.config.opt.discordPlayer);

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

    client.config = config;
    client.player = new Player(client, client.config.opt.discordPlayer);

    require('./src/loader');
    require('./src/events');

    client.login(token);
});