const { SlashCommandBuilder, ChannelType, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create')
		.setDescription('create channel or voice channel'),
	async execute(interaction) {
        await interaction.reply(interaction.guild.id);

        const guild =interaction.guild;
        guild.channels.create({
            name: 'new-channel',
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
            ],
        });
	},
};