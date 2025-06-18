const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const sqlite3 = require('sqlite3').verbose();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mypayout')
    .setDescription('Show your total payout based on guild contributions.'),

  async execute(interaction) {
    const db = new sqlite3.Database('database.db', sqlite3.OPEN_READONLY, err => {
      if (err) {
        console.error('Error opening database:', err);
        return interaction.reply('An error occurred while accessing the database.');
      }
    });

    db.all('SELECT * FROM guilds', (err, rows) => {
      if (err) {
        console.error('Error retrieving data:', err);
        db.close();
        return interaction.reply('An error occurred while retrieving data.');
      }

      const totalGuildPoints = rows.reduce((acc, row) => acc + calculateTotalPoints(row), 0);
      const userRow = rows.find(row => row.userId === interaction.user.id);

      if (!userRow) {
        db.close();
        return interaction.reply('No data found for your user.');
      }

      const userPoints = calculateTotalPoints(userRow);
      const userPercentage = totalGuildPoints > 0 ? ((userPoints / totalGuildPoints) * 100) : 0;
      const totalPayout = Math.floor((userPercentage / 100) * 10_000_000);
      const totalPayoutFormatted = totalPayout.toLocaleString();

      const embed = new EmbedBuilder()
        .setColor([52, 119, 235])
        .setTitle('Your Total Payout')
        .setAuthor({ name: 'Shoot To Kill Bot', iconURL: 'https://i.imgur.com/stMdedm.png' })
        .addFields(
          { name: 'Your Contribution Points:', value: `${userPoints.toLocaleString()}` },
          { name: 'Your Contribution Percentage:', value: `${userPercentage.toFixed(2)}%` },
          { name: 'Payout:', value: `$${totalPayoutFormatted}` },
          { name: 'IBAN:', value: `${userRow.userIBAN ?? 'Not Set'}` }
        );

      db.close();
      return interaction.reply({ embeds: [embed] });
    });
  }
};

function calculateTotalPoints(row) {
  return (
    (row.laundering ?? 0) * 0.3 +
    (row.procaineProcessed ?? 0) * 1500 +
    (row.turfsCapped ?? 0) * 50000 +
    // ... (rest of your points calculation as before)
    (row.xpDb ?? 0) * 100
  );
}
