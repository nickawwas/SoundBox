import { dispatcher } from './play.js';

//Pause YouTube Video in Voice Channel
const pause = msg => {
    dispatcher.pause();
    msg.channel.send('Paused! Enter !r to Resume Playing.');
}

export default pause;