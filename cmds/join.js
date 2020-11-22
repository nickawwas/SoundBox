module.exports = {
    name: 'join',
    description: "Joins a Voice Channel",
    execute(msg, args) {
        if(!msg.channel.voiceChannel) {
            msg.channel.send('success!');
        } else
            msg.channel.send('You are not in charge!');
    }
}