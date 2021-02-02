import { disp } from './play.js';

//Resume Paused YouTube Video in Voice Channel
const resume = msg => {
    disp.resume();
    msg.channel.send(`Resumed!`);
}

export default resume;