import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1310719539717345348/Angry_GIF_-_Angry_-_Descubrir_y_compartir_GIFs.gif?ex=67463e32&is=6744ecb2&hm=238f4ddc058fd2a613d75dfe9e49b07e47000b00988126056c4d067ac2bd6e83&",
"https://cdn.discordapp.com/attachments/1309705495904518174/1310723985209692220/Cat_Angry_GIF_-_Cat_Angry_Meme_-_Discover__Share_GIFs-min.gif?ex=67464256&is=6744f0d6&hm=458c9f77f5d5dd7f970d93ac84035bba1bb6789066f3812e41a659687d4ae8bf&",
"https://cdn.discordapp.com/attachments/1309705495904518174/1310723985696358470/Angry_Kitten_Angry_Cat_GIF_Angry_Kitten_Angry_Cat_Made_It_To_Work_discover_and_share_GIFs-min.gif?ex=67464256&is=6744f0d6&hm=6ac37447dd26d43a6d1638610d09c9148cc6a3be5cefcedfb69799f746805242&"
]

const messages = ["se enojó con"]
const messagesAlone = ["se enojó", "se ofendió", "se le calentaron las papas", "se pudrió", "is upset"]

export default function getAngry(message) {
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
        .setColor("E06C75")
        .setImage(randomGif)
        .setDescription(description)

    message.reply({ embeds: [embed] })

}
