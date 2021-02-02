import { disp } from './play.js';

//Pause YouTube Video in Voice Channel
const pause = msg => {
    disp.pause();
    msg.channel.send('Paused!\nEnter `!r` to Resume Playing.');
}

export default pause;