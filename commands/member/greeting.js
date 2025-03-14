module.exports = {
    name: "hello",
    description: "A friendly greeting for whoever runs the command",
    usage: "greeting",
    execute(message, args) {
        const emojis = ["🙈", "🧃", "🛼", "🔻", "🧎🏻‍♀️‍➡️", "🙇🏻‍♀️"];
        message.reply({content: `Hello ${message.author.displayName}! ${emojis[Math.floor(Math.random() * emojis.length -1)]}`});
    }
}