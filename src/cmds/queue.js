import search from './search.js';

import { MessageEmbed } from 'discord.js';

//Add Music to Queue
const queue = async (msg, args, musicQ) => {
    const [found, content] = await search(args);

    if(!found)
        return msg.channel.send(content);

    musicQ.push(content);

    //Embedded Message
    const newEmbedded = new MessageEmbed()
        .setColor('#1fa19c')
        .setTitle('Enqueued: ')
        .setDescription(`[${content.title}](${content.url})`)
        .setFooter('\nEnjoy SoundBox!');

    msg.channel.send(newEmbedded);  
}

export default queue;