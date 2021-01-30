import { playing, dispatcher, connected } from './play.js';

//Resume Paused YouTube Video in Voice Channel
const skip = (msg, musicQ) => {
    dispatcher.destroy();
    msg.channel.send('Skipped!');

    if(musicQ.length < 1) return;

    const {title, url, image} = musicQ.shift();
    playing(msg, connected, title, url, image, musicQ);
}

export default skip;