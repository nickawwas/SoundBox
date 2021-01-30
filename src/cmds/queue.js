import search from './search.js';

//Add Music to Queue
const queue = async (msg, args, musicQ) => {
    const [found, content] = await search(args);

    if(!found)
        return msg.channel.send(content);

    musicQ.push(content);
    msg.channel.send(`Enqueued:  **${content.title}** !\n${content.url}`);
}

export default queue;