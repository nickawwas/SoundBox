import Discord, { Client, Collection } from 'discord.js';
const client = new Client;
client.commands = new Collection();

import dotenv from 'dotenv';
dotenv.config();

const prefix = "!";
const token = process.env.BOT_TOKEN;
const baseUrl = "https://www.youtube.com/results?search_query=";

import ytdl from 'ytdl-core';

//Import Command Files 
//import {command} from './cmds/command'

//-----
// const fs = require('fs');

// const cmdF = readdirSync('./cmds/').filter(file => file.endsWith('.js'));
// for(const file of cmdF) {
//     import cmd from `./cmds/${file}`;
//     // const cmd = require(`./cmds/${file}`);

//     bot.commands.set(cmd.name, cmd);
// }

//SoundBox is Online and On Youtube
client.on('ready', () => {
    console.log('SoundBox is Online!');
    client.user.setActivity( "YouTube", {type: "WATCHING"});
});

//Run Bot Commands
client.on('message', async msg => {
    if(msg.author.bot || !msg.content.startsWith(prefix))
        return;
    
    //Command + Array of Parameters
    const args = msg.content.slice(prefix.length).trim().split(/\s+/);
    const cmd = args.shift().toLowerCase();

    // const link = baseUrl + args.toString();

    //Define Voice Channel
    const voiceChannel = msg.member.voice.channel;
    
    if(!voiceChannel)
        return msg.reply(" Please Connect to a Voice Channel and Try Again!");
   
   //Connect to Voice Channel
    msg.channel.send(`Connecting to ${voiceChannel.name} . . .`);

    let connection = await voiceChannel.join()
        .then(() => console.log(`Connected to ${voiceChannel.name}!`))
        .catch(err => console.log('Failed to Connect to Voice Channel: ', err.message));

    //Play Video
    try {
        let disp = connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8'));
            //.on('finish', () => voiceChannel.leave());
        disp.setVolumeLogarithmic(5 / 5);
    } catch(e) {
        console.log('Failed to Play Video:', e);
    }

    // let dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A',{ quality: 'highestaudio' }))
    //     .then( () => msg.channel.send(`Playing ${args} in ${voiceChannel.name} . . .`))
    //     .catch( err => console.log('Failed to Play in Voice Channel: ', err.message));

    //     dispatcher.setVolumeLogarithmic(5 / 5);

    // let playing = connection.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A'))
    //     .then( () => msg.channel.send(`Playing ${args} in ${voiceChannel.name} . . .`))
    //     .catch( err => console.log('Failed to Play in Voice Channel: ', err.message));
    // .on('finish', () => {
    //     voiceChannel.leave();
    // })
        // .then( () => msg.channel.send(`Playing ${args} in ${voiceChannel.name} . . .`))
        // .catch( err => console.log('Failed to Play in Voice Channel: ', err.message));



    //Command Controller
    // switch(args[0]) {
    //     case 'play':
    // }

    // if(cmd.startsWith('play'))
    //     client.commands.get('play').execute(cmd, args);
    // else if(cmd.startsWith('fav'))
    //     client.commands.get('favorites').execute(cmd, args);
    // else if(cmd == 'cmd' || cmd == 'commands')
    //     client.commands.get('command').execute(msg, args, Discord);
    // else
    //     msg.reply("no command found :(");

    // if(cmd === 'fav' || cmd === 'favorites')
    //     client.commands.get('favorites').execute(msg, args);
    // else if(cmd == 'r' || cmd == 'roles')
    //     client.commands.get('roles').execute(msg, args);
    // else if(cmd == 'cmd' || cmd == 'commands')
    //     client.commands.get('command').execute(msg, args, Discord);
    // else if(cmd == 'j' || cmd == 'join')
    //     client.commands.get('join').execute(msg, args);
    // else
    //     msg.channel.send("No Command Found :( ");
});

//Login Using Token
client.login(token);