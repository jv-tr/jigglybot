const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("card")
		.setDescription("card display"),
	async execute(interaction, client) {
		const embed = new EmbedBuilder()
			.setTitle('Lorem Ipsum')
			.setDescription('Lorem Ipsum Diem Latim')
			.setColor(0x7248bd)
			.setImage(client.user.displayAvatarURL())
			.setThumbnail(client.user.displayAvatarURL())
			.setTimestamp(Date.now())
			.setAuthor({
				url: `https://google.com`,
				iconURL: interaction.user.displayAvatarURL(),
				name: interaction.user.tag
			})
			.setFooter({
				iconURL: client.user.displayAvatarURL(),
				text: client.user.tag
			})
			.setURL(`https://duckduckgo.com`)
			.addFields([
			{
				name: `Lorem Ipsum`,
				value: `Ipsum`,
				inline: true
			},
			{
				name: `Lorem Ipsum`,
				value: `Lorem`,
				inline: true,
			}
			])

			await interaction.reply({
				embeds: [embed]
			})
	},
}
