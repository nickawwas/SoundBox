import { dispatcher } from './play.js';

//Resume Paused YouTube Video in Voice Channel
const resume = msg => {
    dispatcher.resume();
    msg.channel.send(`Resumed!`);
}

export default resume;