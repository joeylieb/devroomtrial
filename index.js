const {Client, GatewayIntentBits} = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const {join} = require("node:path");
const path = require("node:path");
const client = new Client({intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

const commands = new Map();
const files = fs.readdirSync(__dirname + config.commandsFolder, {recursive: true})

files.forEach(file => {
    if(file.endsWith(".js")) {
        const commandPath = path.join(__dirname + config.commandsFolder, file);
        const command = require(commandPath);
        commands.set(command.name, command);
        console.log("Loaded " + command.name);
    }
});

client.on("messageCreate", (message) => {
    if(!message.content.startsWith(config.prefix)) return;
    if(message.author.bot) return;
    const commandName = message.content.trim().split(" ")[0].slice(config.prefix.length);
    if(!commands.has(commandName)) return;

    const args = message.content.trim().split(" ").slice(1);
    const command = commands.get(commandName)
    if(command.permission && !(message.member.permissions.has(BigInt(command.permission)))) {
        message.reply({content: "You don't have permission to use this command!"});
        return;
    }
    command.execute(message, args);
})


client.on("ready", () => {
    console.log(client.user.username + " is ready!");
});

client.login(config.token);

