import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/837459049096020029/1349195574091448432/descarga_2.gif?ex=67d237cb&is=67d0e64b&hm=b41b934328a64aa7ac348d6e01c3e07fe19abd5759b9aecf277acaaa961f5405&",
"https://cdn.discordapp.com/attachments/837459049096020029/1349195575190487120/Akame_Ga_Kill_Gifs.gif?ex=67d237cb&is=67d0e64b&hm=1f10bf0f9486c0ad08ba3887251d286133e11128ccf4e18c12b33002fb006644&",
"https://cdn.discordapp.com/attachments/837459049096020029/1349195575584624740/descarga_1.gif?ex=67d237cc&is=67d0e64c&hm=2633f3443bd1c033a30c81fa9585ba78086d2fb87c40347e258bacee1fa51219&",
"https://cdn.discordapp.com/attachments/837459049096020029/1349195575962370079/Akame_ga_Kill.gif?ex=67d237cc&is=67d0e64c&hm=8781f682b7eae3c6247fc0cf2bc775a33c1563abf5aa9c0d317114463b41660d&",]

const messages = ["mató a", "asesinó a", "dejó morir a"]
const messagesAlone = ["se mató", "se murió", "no aguantó más con su vida", "se rindió y se mword", "hizo la suicidación"]

export default function getKill(message) {
  const mentionedUser = message.mentions.users.first()

  const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  const userMessage = message.member.user.username

  let description = `**${userMessage}** ${randomMessage} **${mentionedUser?.username}**`

  if (!mentionedUser) {
    const aloneMessage = messagesAlone[Math.floor(Math.random() * messagesAlone.length)]
    description = `**${userMessage}** ${aloneMessage}`
  }

  const embed = new EmbedBuilder()
    .setColor("7B0000")
    .setImage(randomGif)
    .setDescription(description)

  message.reply({ embeds: [embed] })
}