module.exports = {
    name: 'roles',
    description: "Assigns a Role",
    execute(msg, args) {
        // let sultan = msg.guild.roles.cache.find(r => r.name === "Sultans");
        // let mbr = msg.guild.members.cache.get(args);
        
        //Only Sultans Can Assign Roles
        if(msg.member.roles.cache.has('777315851736186892')) {
            //From Noob to Junior
            if(msg.member.roles.cache.has('777316020486012969'))
                msg.member.roles.add('777316245828796456');
            //From Junior to Mids
            else if(msg.member.roles.cache.has('777316245828796456'))
                msg.member.roles.add('777316500109262866');
            //From Mids to Seniors
            else if(msg.member.roles.cache.has('777316500109262866'))
                msg.member.roles.add('777316579489742848');
            //No New Role
            else {
                msg.channel.send('No New Role Available');
                //...
            }

            msg.channel.send('Level Up!');
        } else
            msg.channel.send('Nice Try!');
    }
}