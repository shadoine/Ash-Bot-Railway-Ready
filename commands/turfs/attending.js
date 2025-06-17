const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('event')
    .setDescription('Create an event to see who is attending')
    .addStringOption(option =>
      option.setName('description')
        .setDescription('Write what you want to do')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('date')
        .setDescription('Time or Date idk')
        .setRequired(true)),

  async execute(interaction) {
    const description = interaction.options.getString('description');
    const date = interaction.options.getString('date');

    const embed = new EmbedBuilder()
      .setTitle('Attendance')
      .setDescription(`@everyone\nWill you be at **${description}** on **${date}**?\n\n✅ **Yes:**\n\n❌ **No:**\n\n❓ **Maybe:**`)
      .setColor([220, 173, 69])
      .setTimestamp();

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder().setCustomId('yes').setLabel('✅ Yes').setStyle(ButtonStyle.Success),
        new ButtonBuilder().setCustomId('no').setLabel('❌ No').setStyle(ButtonStyle.Danger),
        new ButtonBuilder().setCustomId('maybe').setLabel('❓ Maybe').setStyle(ButtonStyle.Primary),
        new ButtonBuilder().setCustomId('remove').setLabel('Remove Vote').setStyle(ButtonStyle.Secondary),
      );

    const message = await interaction.reply({ content: '@everyone', embeds: [embed], components: [row], fetchReply: true });

    const responses = {
      yes: new Set(),
      no: new Set(),
      maybe: new Set(),
    };

    const updateEmbed = () => {
      const formatUsers = (users) => [...users].map(u => `<@${u}>`).join('\n') || '*No one yet*';

      embed.setDescription(
        `@everyone\nWill you be at **${description}** on **${date}**?\n\n` +
        `✅ **Yes:**\n${formatUsers(responses.yes)}\n\n` +
        `❌ **No:**\n${formatUsers(responses.no)}\n\n` +
        `❓ **Maybe:**\n${formatUsers(responses.maybe)}`
      );

      message.edit({ embeds: [embed] });
    };

    const collector = message.createMessageComponentCollector({ time: 1000 * 60 * 60 * 8 }); // 8 hours

    collector.on('collect', i => {
      // Remove user from all sets first
      responses.yes.delete(i.user.id);
      responses.no.delete(i.user.id);
      responses.maybe.delete(i.user.id);

      if (i.customId === 'remove') {
        i.reply({ content: 'Your vote has been removed.', ephemeral: true });
      } else {
        responses[i.customId].add(i.user.id);
        i.reply({ content: `Marked you as "${i.customId}"`, ephemeral: true });
      }

      updateEmbed();
    });
  },
};
