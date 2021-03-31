module.exports ={
    info : {
    name: "vocale",
    aliases: ["vc", "voc", "vocal"]
},
    async run(client, message) {
        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');

        let count = 0;
        let counter = 0;
        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        message.channel.send(`<a:vocal:826499168087572530> ** | Il y a actuellement ` + count + ` personnes en vocal.**`);
        
    }
}


