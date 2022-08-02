const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("profile")
		.setDescription("Display trainer profile."),
	async execute(interaction, client) {
		DEFAULT_AVATAR = interaction.user.displayAvatarURL()
		DEFAULT_NAME = interaction.user.tag
		NOT_YET_CONFIGURED = [`Data not found, setup may still in progress...`, `${Math.floor(Math.random() * 11)}`]

		const embed = new EmbedBuilder()
			.setTitle(`Trainer Card :receipt: `)
			.setThumbnail((client.hasAvatar = client.hasAvatar ?? DEFAULT_AVATAR)) // TODO¹
			.setColor(0x7248bd)
			.addFields([
				{
					name: `Name`,
					value: `${(client.hasName = client.hasName ?? DEFAULT_NAME)}`,
				},
				{
					name: `Trainer ID No.`,
					value: `${interaction.user.id}`,
				},
				{
					name: `Money`,
					value: NOT_YET_CONFIGURED[0],
				},
				{
					name: `Pokedéx`,
					value: NOT_YET_CONFIGURED[0],
				},
				{
					name: `Hometown`,
					value: NOT_YET_CONFIGURED[0],
				},
				{
					name: `Badges`,
					value: NOT_YET_CONFIGURED[0],
				},
				{
					name: `Level`,
					value: `▰▰▰▰▰▰▱▱▱▱▱ ${55}%`,
				},
			])
		await interaction.reply({
			embeds: [embed],
		})
	},
}

// TODOS:
// ¹: User can change his avatar any time with selected trainers images, otherwhise
// it should display his discord avatar

// ²: User can change his name any time, otherwhise it should display his discord tag
