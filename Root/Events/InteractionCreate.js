module.exports = {
	name: 'interactionCreate',
	run: async (client, interaction) => {
		const loadCommandOptions = require(`${ROOT.path}/Root/Structures/CommandOptions/loadCommandOptions`);
		if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttonCommands.get(interaction.customId), true, 'Button');
		else if (interaction.isSelectMenu()) loadCommandOptions(client, interaction, client.commands.selectMenus.get(interaction.customId), true, 'SelectMenus');
		else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slashCommands.get(interaction.commandName), true, 'SlashCommand');
		else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.contextMenus.get(interaction.commandName), true, 'ContextMenus');
	},
};
