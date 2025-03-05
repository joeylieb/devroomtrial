const {Client, GatewayIntentBits} = require("discord.js");
const config = require("./config.json");

const client = new Client({intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]});

client.on("ready", () => {
    console.log(client.user.username + " is ready!");
});

client.login(config.token);

