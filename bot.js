const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '|ping') {
    	message.reply('pong');
  	}
    if (message.content === '|h') or (message.content === '|help') {
        message.reply('This bot\'s prefix is |.\nAvailable Commands:\nh or help: Shows bot prefix and available bot commands.\nping: The bot will say pong. Used for testing purposes.');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
