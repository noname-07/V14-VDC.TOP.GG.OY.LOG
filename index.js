

const { Client, Intents, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const DBL = require('dblapi.js')
const { TOKEN } = require("./config.json");

const client = new Client({ intents: 643 });

client.once('ready', () => {
	console.log('Hazır!');
});

const dbl = new DBL("topgg dbl link", { webhookPort: 3000, webhookAuth: "retrocode"});
dbl.webhook.on('ready', hook => {
  console.log(`Web kancası çalışıyor http://${hook.hostname}:${hook.port}${hook.path}`);
});
const row = new ActionRowBuilder()
    .addComponents(
     new ButtonBuilder()
        .setLabel('Oy linki!')
        .setStyle(5)
    .setURL("https://discord.gg/altyapilar"),
)
dbl.webhook.on('vote', vote => {
  const channel = client.channels.cache.get("1077901118849425490")
  const embed = new EmbedBuilder()
  .setTitle("__Oy verdiğin İçin Teşekkürler!__")
  .setDescription(`⭐ **Oy Veren:**\n<@${vote.user}> \n\n💖 **12 Saat sonra tekrar oy vermeyi unutma** `)
  .setFooter({text:"Retro Code | Oy Log"})
  .setColor(0xFFD700)
  channel.send({ embeds: [embed], components: [row] });
});

client.login(TOKEN);