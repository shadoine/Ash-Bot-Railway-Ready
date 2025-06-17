const { SlashCommandBuilder , EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('turf')
        .setDescription('Turf Commands')
        .addStringOption(option =>
            option.setName('turf')
            .setDescription('Turf Commands')
            .setRequired(true)
            .addChoices(
            {name:'Containers', value: 'containers'},
            {name:'Attack', value: 'attack'},
            {name:'Kortz', value: 'kortz'},
            {name:'Lumber', value: 'lumber'},
            {name:'Oil', value: 'oil'},
            {name:'Powerplant', value: 'powerplant'},
            {name:'Redwood', value: 'redwood'},
            )),



        async execute(interaction) {
            const category = interaction.options.getString('turf');
            switch (category) {
                case 'containers':
                    const embed = new EmbedBuilder()
                    .setColor([220, 173, 69])
                    .setTitle('Containers')
                    .setAuthor({ name: 'Bumblebee Bot', iconURL: 'https://i.imgur.com/H87MBdp.png' })
                    .setDescription('CONTAINERS IS GETTING HIT. PLEASE GET ON AND GET READY!')
                    .setImage('https://i.imgur.com/sS6YZV2.jpeg')
                    .setTimestamp()
                    .setFooter({ text: 'Made by: Salty >.<'});
                interaction.reply({
                    embeds: [embed],
                    allowedMentions: { parse: ['everyone'] },
                    content: '@everyone'});
                            }

            switch(category) {
                case 'attack':
                    const embed = new EmbedBuilder()
                    .setColor([220, 173, 69])
                    .setTitle('Attack')
                    .setAuthor({ name: 'Bumblebee Bot', iconURL: 'https://i.imgur.com/H87MBdp.png' })
                    .setDescription('WE ARE GOING TO HIT TURFS SOON. PLEASE GET ON AND GET READY!')
                    .setImage('https://i.imgur.com/yxrSuhl.gif')
                    .setTimestamp()
                    .setFooter({ text: 'Made by: Salty >.<'});
                interaction.reply({
                    embeds: [embed],
                    allowedMentions: { parse: ['everyone'] },
                    content: '@everyone'});
                            }
            switch(category) {
                case 'kortz':
                    const embed = new EmbedBuilder()
                    .setColor([220, 173, 69])
                    .setTitle('Kortz')
                    .setAuthor({ name: 'Bumblebee Bot', iconURL: 'https://i.imgur.com/H87MBdp.png' })
                    .setDescription('KORTZ IS GETTING HIT. PLEASE GET ON AND GET READY!')
                    .setImage('https://i.imgur.com/tdj9SUo.png')
                    .setTimestamp()
                    .setFooter({ text: 'Made by: Salty >.<'});
                interaction.reply({
                    embeds: [embed],
                    allowedMentions: { parse: ['everyone'] },
                    content: '@everyone'});
                }
            switch(category) {
                case 'lumber':
                    const embed = new EmbedBuilder()
                    .setColor([220, 173, 69])
                    .setTitle('Lumber')
                    .setAuthor({ name: 'Bumblebee Bot', iconURL: 'https://i.imgur.com/H87MBdp.png' })
                    .setDescription('LUMBER IS GETTING HIT. PLEASE GET ON AND GET READY!')
                    .setImage('https://i.imgur.com/VDmJWRS.jpeg')
                    .setTimestamp()
                    .setFooter({ text: 'Made by: Salty >.<'});
                interaction.reply({
                    embeds: [embed],
                    allowedMentions: { parse: ['everyone'] },
                    content: '@everyone'});
                }
            switch(category) {
                case 'oil':
                    const embed = new EmbedBuilder()
                    .setColor([220, 173, 69])
                    .setTitle('Oil')
                    .setAuthor({ name: 'Bumblebee Bot', iconURL: 'https://i.imgur.com/H87MBdp.png' })
                    .setDescription('OIL IS GETTING HIT. PLEASE GET ON AND GET READY!')
                    .setImage('https://i.imgur.com/tunb0Kb.png')
                    .setTimestamp()
                    .setFooter({ text: 'Made by: Salty >.<'});
                interaction.reply({
                    embeds: [embed],
                    allowedMentions: { parse: ['everyone'] },
                    content: '@everyone'});
                }
            switch(category) {
                case 'powerplant':
                    const embed = new EmbedBuilder()
                    .setColor([220, 173, 69])
                    .setTitle('Powerplant')
                    .setAuthor({ name: 'Bumblebee Bot', iconURL: 'https://i.imgur.com/H87MBdp.png' })
                    .setDescription('POWERPLANT IS GETTING HIT. PLEASE GET ON AND GET READY!')
                    .setImage('https://i.imgur.com/6591zwy.png')
                    .setTimestamp()
                    .setFooter({ text: 'Made by: Salty >.<'});
                interaction.reply({
                    embeds: [embed],
                    allowedMentions: { parse: ['everyone'] },
                    content: '@everyone'});
                }
            switch(category) {
                case 'redwood':
                    const embed = new EmbedBuilder()
                    .setColor([220, 173, 69])
                    .setTitle('Redwood')
                    .setAuthor({ name: 'Bumblebee Bot', iconURL: 'https://i.imgur.com/H87MBdp.png' })
                    .setDescription('REDWOOD IS GETTING HIT. PLEASE GET ON AND GET READY!')
                    .setImage('https://i.imgur.com/1xy9s37.png')
                    .setTimestamp()
                    .setFooter({ text: 'Made by: Salty >.<'});
                interaction.reply({
                    embeds: [embed],
                    allowedMentions: { parse: ['everyone'] },
                    content: '@everyone'});
                
        }
    }
}