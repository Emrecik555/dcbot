const { SlashCommandBuilder } = require('discord.js');
const { GIPHY_API_KEY2 } = process.env;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gif')
		.setDescription('Sends a random gif!')
		.addStringOption(option =>
			option
				.setName('tag')
				.setDescription('tag')
				.setRequired(true)),
	async execute(interaction) {
        const tag = interaction.options.getString('tag');
		const link = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY2}&q=${tag}&limit=1`;
		console.log(link);
		const response = await fetch(link);
		const data = await response.json();
        if (data.data.length > 0) {
            const gifUrl = data.data[0].images.original.url;  // GIF'in URL'sini alın
			
            await interaction.reply(gifUrl);  // GIF URL'sini yanıt olarak gönderin
        } else {
            await interaction.reply('No gifs found for that tag.');
        }
		
	},
};