module.exports = {
    name: 'favorites',
    description: "Modify Favorite Commands",
    execute(msg, args) {
        //Only Sultans Can Modify Favorites
        if(msg.member.roles.cache.has('777315851736186892'))
            msg.channel.send('success!');
        else
            msg.channel.send('You are not in charge!');
    }
}