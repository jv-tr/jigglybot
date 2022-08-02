const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("returns my ping!"),
	async execute(interaction, client) {
		await interaction.deferReply({
			fecthReply: true,
		})

		const newMessage = `API Latency: ${client.ws.ping}ms\nClient Ping:${
			Date.now() - interaction.createdTimestamp
		}ms`

		await interaction.editReply({
			content: newMessage,
		})
	},
}
