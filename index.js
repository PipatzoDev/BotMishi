const { ContextMenuCommandAssertions } = require('discord.js');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({
    intents: ['DirectMessages','DirectMessageTyping','DirectMessageReactions','Guilds','AutoModerationConfiguration','AutoModerationExecution','GuildBans','GuildEmojisAndStickers','GuildIntegrations','GuildInvites','GuildMembers','GuildMessageReactions','GuildMessageTyping','GuildMessages','GuildPresences','GuildScheduledEvents','GuildVoiceStates','GuildWebhooks','MessageContent']
});


/*
client.on('ready', () => {
    client.channels.cache.get('1055456285778264114').send('Macalen weno pal pene del pipa.')
});*/

client.on('messageCreate', message => {
    if(message.content.startsWith('!'+'Macalen'))
    {
        message.reply('Maracalen es una peyia y se la come al '+ message.author.username );
        message.channel.send({
            files:["https://cdn.discordapp.com/attachments/828493167530999818/1060417439415939072/bruuut.png"]
        });
        client.channels.cache.get('930906516255568005').send('Macalen weno pal pene del pipa.')

        
    }
    if(message.content.includes('poto'))
    {
        message.react('💩')
    }
});


client.login(process.env.TOKEN).then(() => console.log("${client.user.username} se ah conectado."+ config.ClientID));