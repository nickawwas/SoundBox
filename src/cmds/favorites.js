import search from './search.js';

//Add Favorite Song to Queue
const fav = async (msg, args, playlist, musicQ) => {
    const fav = args.join(' ');

    let i = -1;
    for(let p of playlist)
        if(p.alias.includes(fav)) {
            i = playlist.indexOf(p);
            break;
        }

    if(i === -1)
        return msg.channel.send(`Favorite ${fav} Doesn't Exist`);
    
    musicQ.push(playlist[i].content);
    msg.channel.send(`Enqueued a Favorite:  ${playlist[i].alias}!`);
}

const adfav = async (msg, args, playlist) => {
    const fav = args.join(' ');
    const [found, content] = await search(args);

    if(!found)
        return msg.channel.send(content);

    let contains = false;
    playlist.forEach(({alias}) => alias.includes(fav) ? contains = true : false)
    
    if(contains)
        return msg.channel.send(`Favorite ${fav} Already Exists!`);
    
    playlist.push({"alias": fav, "content": content});
    msg.channel.send(`Added a new Favorite:  ${content.title}!`);
}

export { fav, adfav };