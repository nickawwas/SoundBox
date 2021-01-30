import { MessageEmbed } from 'discord.js';

//Displays All Commands
const command = msg => {
    const newEmbedded = new MessageEmbed()
            .setColor('#1fa19c')
            .setTitle('Commands')
            .addFields(
                {name: 'Prefix (!)', value: 'Use to Initiate a Command'},
                {name: '!p, !play', value: 'Play YouTube Videos', inline: true},
                {name: '!pause', value: 'Pause YouTube Videos', inline: true},
                {name: '!r, !res', value: 'Resume YouTube Videos', inline: true},
                {name: '!s, !skip', value: 'Skip Video to Next in Queue', inline: true},
                {name: '!q, !queue', value: 'Add Video to Queue', inline: true},
                {name: '!af, !adfav', value: 'Add Song to Favorites', inline: true},
                {name: '!f, !fav', value: 'Plays Songs from Favorites', inline: true},
                {name: '!h, !help', value: 'Lists All Commands', inline: true}
            )
            .setFooter('\nEnjoy SoundBox!');

    msg.channel.send(newEmbedded);
}

export default command;