import ytdl from 'ytdl-core';
import { MessageEmbed } from 'discord.js';

import search from './search.js';

let dispatcher = '';
let connected = '';

//Plays YouTube Video in Voice Channel
const play = async (msg, args, musicQ) => {
    //Define Voice Channel
    const voiceChannel = msg.member.voice.channel;
    
    if(!voiceChannel)
        return msg.channel.send("Please Connect to a Voice Channel and Try Again!");

    //Connecting to Voice Channel
    const connection = await voiceChannel.join();
    
    connected = connection; 

    //Search Using YouTube API & Select Video to Play
    const [found, content] = await search(args);

    if(!found)
        return msg.channel.send(content);
    
    const {title, url, image} = content;

    //Start Audio Stream & Leave Once Queue is Empty
    playing(msg, connection, title, url, image, musicQ);
}

const playing = (msg, connection, title, url, image, musicQ) => {
    //Start Audio Stream
    const stream = ytdl(url, { filter: 'audioonly'});
    const disp = connection.play(stream)
        .on('error', () => {
            return msg.channel.send('Error: Failed to Play Video. Please Try Again.');   
        })
        .on('finish', () => {
            //Play Until Queue is Empty
            if(musicQ.length < 1)
                return voiceChannel.leave();

            const {title, url, image} = musicQ.shift();
            playing(msg, connection, title, url, image, musicQ);
        })
        .on('end', () => {
            //Play Until Queue is Empty
            if(musicQ.length < 1)
                return voiceChannel.leave();

            console.log('on end');
            const {title, url, image} = musicQ.shift();
            playing(msg, connection, title, url, image, musicQ);
        });

    //Get Dispatcher
    dispatcher = disp;
    
    //Embedded Message
    const newEmbedded = new MessageEmbed()
        .setColor('#1fa19c')
        .setTitle('Now Playing: ')
        .setDescription(`[${title}](${url})`)
        .setImage(image)
        .setFooter('\nEnjoy SoundBox!');

    msg.channel.send(newEmbedded);  
}

export { play, playing, dispatcher, connected };