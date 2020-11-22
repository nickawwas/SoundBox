// import {command} from './cmds/command'

const Discord = require('discord.js');
const bot = new Discord.Client();

const pf = "!";
const tkn = 'Nzc3MzE4NTc2NTA3NDUzNTEx.X7BsVg._w79mg4Vm5Zq1zSmHJSiQv2cZmg';

//Command Controller
const fs = require('fs');
bot.commands = new Discord.Collection();

const cmdF = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for(const file of cmdF) {
    const cmd = require(`./cmds/${file}`);

    bot.commands.set(cmd.name, cmd);
}

//Ensure SoundBox is Online and On Youtube
bot.once('ready', msg => {
    console.log('SoundBox is Online!');
    bot.user.setActivity( "YouTube", {type: "WATCHING"});
});

//Bot Commands
bot.on('message', msg => {
    if(!msg.content.startsWith(pf) || msg.author.bot) 
        return;

    const args = msg.content.slice(pf.length).split(/\s+/);
    const cmd = args.shift().toLowerCase();

    console.log(args);

    if(cmd === 'fav' || cmd === 'favorites')
        bot.commands.get('favorites').execute(msg, args);
    else if(cmd == 'r' || cmd == 'roles')
        bot.commands.get('roles').execute(msg, args);
    else if(cmd == 'cmd' || cmd == 'commands')
        bot.commands.get('command').execute(msg, args, Discord);
    else if(cmd == 'j' || cmd == 'join')
        bot.commands.get('join').execute(msg, args);
    else
        msg.channel.send("No Command Found :( ");
});

bot.login(tkn);