module.exports = {
    name: "kick",
    description: "Kicks a user from the guild",
    usage: "kick [@user] [reason|optional]",
    permission: 2,
    execute(message, args) {
        message.reply({content: "You just banned!"})
    }
}