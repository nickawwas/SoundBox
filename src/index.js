import { Client } from 'discord.js';
const client = new Client;

import dotenv from 'dotenv';
dotenv.config();

const prefix = "!";
const token = process.env.BOT_TOKEN;

//Import Commands 
import { play } from './cmds/play.js'
import pause from './cmds/pause.js';
import resume from './cmds/resume.js';
import skip from './cmds/skip.js';
import queue from './cmds/queue.js';
import { fav, adfav }from './cmds/favorites.js';
import command from './cmds/command.js';

//Instantiate Queue
let musicQueue = [];

//Favorites Playlist
let playlist = [];

//SoundBox is Online and On Youtube
client.on('ready', () => {
    console.log('SoundBox is Online!');
    client.user.setActivity( "YouTube", {type: "WATCHING"});
});

//Run Bot Commands
client.on('message', async msg => {
    if(msg.author.bot || !msg.content.startsWith(prefix))
        return;
    
    //Get Command & Arguments
    const args = msg.content.slice(prefix.length).trim().split(/\s+/);
    const cmd = args.shift().toLowerCase();

    //Command Controller
    switch(cmd) {
        case 'p':
        case 'play': 
            play(msg, args, musicQueue);
            break;
        case 'pause':
            pause(msg);
            break;
        case 'r':
        case 'res':
            resume(msg);
            break;
        case 's':
        case 'skip':
            skip(msg, musicQueue);
            break;
        case 'q':
        case 'queue':
            queue(msg, args, musicQueue);
            break;
        case 'af':
        case 'adfav':
            adfav(msg, args, playlist);
            break;
        case 'f':
        case 'fav':
            fav(msg, args, playlist, musicQueue);
            break;
        case 'h':
        case 'help':
            command(msg);
            break;
        default: 
            msg.channel.send("Not a Valid Command. \nEnter !help to list all commands");
    }
});

//Login Using Token
client.login(token);