module.exports = {
    name: "echo",
    description: "Repeats whatever the user supplies",
    usage: "echo [message]",
    execute(message, args){
        message.reply({content: args.join(" ")});
    }
}