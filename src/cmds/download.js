import ytdl from 'ytdl-core';
import {createWriteStream} from 'fs';

import search from './search.js';

const download = async (msg, args) => {
    //Search Using YouTube API & Select Video to Play
    const [found, content] = await search(args);

    if(!found)
        return msg.channel.send(content);

    const {title, url} = content;

    //Convert to MP3
    const downloaded = title.replace(" ", "-");
    ytdl(url, { fmt: 'mp3', opusEncoded: false }).pipe(createWriteStream(`./songs/${downloaded}.mp3`))
        .on('finish', () => {
            try {
                msg.channel.send(`Converted **${title}** Video to MP3!`);
                //Cannot Create Attachments Over 8MB
                //msg.channel.send(`Converted ${title} Video to MP3:`, new MessageAttachment(`${downloaded}.mp3`, `${downloaded}.mp3`))
            } catch (e) {
                msg.channel.send(`Error: Could not Convert ${title} Video to MP3`);
            }
        });
}
    
export default download;