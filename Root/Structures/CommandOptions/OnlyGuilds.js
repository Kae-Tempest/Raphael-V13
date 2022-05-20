const { MessageEmbed } = require('discord.js');
module.exports = async function (message, command) {
	if (!command.onlyGuilds) return false;
	if (command.onlyGuilds.some((id) => id === message.guild.id)) return false;
	else {
		let onlyGuilds = [];
		command.onlyGuilds.forEach((id) => {
			onlyGuilds.push(client.guilds.cache.get(id).name);
		});
		if (command.returnOnlyGuilds === false || command.returnNoErrors) return true;
		else
			message.reply({
				embeds: [
					new MessageEmbed()
						.setAuthor({
							name: message.member.user.tag,
							iconURL: message.member.user.displayAvatarURL({ dynamic: true }),
						})
						.setColor('RANDOM')
						.setTimestamp()
						.setDescription(`This command can only be ran in these guilds.\n•${onlyGuilds.join('\n•')}`),
				],
				allowedMentions: {
					repliedUser: false,
				},
			});
		return true;
	}
};
