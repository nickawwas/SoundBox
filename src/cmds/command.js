module.exports = {
    name: 'command',
    description: "Displays all commands",
    execute(msg, args, Discord) {
        //Create an Embedded Message
        const newEmbedded = new Discord.MessageEmbed()
            .setColor('#808000')
            .setTitle('Commands')
            .addFields(
                {name: 'Prefix', value: '! - Use this to initiate a command'},
                {name: 'Cmds', value: 'roles, favorites, etc'}
            )
            .setFooter('\nEnjoy SoundBox!');
            
            // .setDescription(this.description)

        msg.channel.send(newEmbedded);
    }
}