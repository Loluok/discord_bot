import { EmbedBuilder } from "discord.js";

const randomGifs = [
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285867276832849/descarga_2.gif?ex=6744aa4e&is=674358ce&hm=e5f32f1e5769f84f2f12418d7149ec3958e8a860a4ab327aa61431cfa3fdafed&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285867709108315/Patrick_Blush_GIF_-_Patrick_Blush_Spongebob_-_Discover__Share_GIFs.gif?ex=6744aa4e&is=674358ce&hm=680c663a6fc82a4141bf5818ea29cce31bf469b8ebed60f4f9c988e4533f6547&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285868149248091/Serena_enamorada.gif?ex=6744aa4e&is=674358ce&hm=ba886a56d048b6d1f6a92713d869afa27d5abc15be288bb19a87188236918794&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285868552163418/descarga_1.gif?ex=6744aa4e&is=674358ce&hm=8b98737aa26ac7ce1a072a08d111a4f62631eaf06ef661facda15c99d925bdf1&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285868920995960/GIF_-_Shy_Blush_-_Discover__Share_GIFs.gif?ex=6744aa4f&is=674358cf&hm=77d9d942870dee774b48e318b8039f2a8df7730e0804423bd4a70a72801a1f0e&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285869323653212/Quby_Blushing_Sticker_-_Quby_Blushing_Embarrased_-_Discover__Share_GIFs.gif?ex=6744aa4f&is=674358cf&hm=2e77a5897ec2f3607b44cfe5ddf70930b20b943a776b717a0f5b5b7abce0aebd&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285869739020308/Flooshed_Blush_GIF_-_Flooshed_Blush_Explode_-_Discover__Share_GIFs.gif?ex=6744aa4f&is=674358cf&hm=b6ed279bdec4752ef49859a9c8fa0e067778e565133e282ec9f9862412b98452&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310285870082818191/people_blush_GIF_-_Find__Share_on_GIPHY.gif?ex=6744aa4f&is=674358cf&hm=e3a62c6ed9e234d15fd9d2eca7205c392a95fceee29181d7c802d675c8088ead&",
  "https://cdn.discordapp.com/attachments/837459049096020029/1310074658455949352/0276345dcddbdbd0ec0bb1df4f62cda2.gif?ex=6743e59a&is=6742941a&hm=1a3f6d34f9f3248d8221cfd8bbc4356548a6c1c03755060a131bdb666e4ba4d6&"
]

const messages = ["se sonrojó por culpa de", "se puso nervios@ por"];

export default function getBlush(message) {
  const mentionedUser = message.mentions.users.first();

  if (!mentionedUser) {
    return message.reply("Menciona a alguien, no puedes sonrojarte solo.")
  }

  const userMessage = message.member.user.username;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];

  const embed = new EmbedBuilder()
    .setColor("f9d6d5")
    .setImage(randomGif)
    .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

  message.reply({ embeds: [embed] });
}
