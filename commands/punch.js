import { EmbedBuilder } from "discord.js";

const randomGifs = [
    "https://cdn.discordapp.com/attachments/1308585862803492934/1310010267911848018/e60445406301561fbbeb62e7c4959ad4.gif?ex=6743a9a2&is=67425822&hm=a34558d2fe73f1f7a2c211e2e76c1c0546fcf446c14f300983211fce893ccacd&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310012255454101645/63d7d74c6fb962f048099e57ad4e67ae.gif?ex=6743ab7c&is=674259fc&hm=afa535aa2caa9f680ba8985195a7a321cdedb67ebcee0da4abce6514500707e9&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310012759538274466/458ec6c19f0db46d0dacc9a94ee3e16d.gif?ex=6743abf4&is=67425a74&hm=a087775b449a764f84fb0745e5ad3a47c757118e51801d50df5c5420745fddf0&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310012760020488202/4b3b84ff9315f3673c41ca0029434104.gif?ex=6743abf4&is=67425a74&hm=a1046e4e92ab52cdf3779b0687ce420ec5e8c25411b7ad1b69ced1aac1d60c21&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310012760402432100/79296b3ba64683b40452454247008b0b.gif?ex=6743abf4&is=67425a74&hm=e2fd15c5b4550f62f3751bbaeaa58295fc67da06631defd5584f807d6ead081f&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310012760829984910/d9cfa96a90678c65fc81a7147681e621.gif?ex=6743abf5&is=67425a75&hm=9bd56e34607d2e14d369584b9396bcb043421dd2ec0de97a64852ccbb2729c89&",
    "https://cdn.discordapp.com/attachments/837459049096020029/1310012761312591942/cc9dd3a99a069fa5a2548d8f57f4d5d8.gif?ex=6743abf5&is=67425a75&hm=d6c3e6bec8904d14b229b21e73afebdb5a26bdbb4b0f4256daf3d42bc2394052&"]

    const messages = ["le partió la madre a", "le sacó la chucha a ", "le dió una piña a", "golpeó a", "golpeó brutalmente a", "le pegó un bife a", "se paró de manos con"];

export default function getPunch(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Menciona a alguien, pelotudin")
    }

    const userMessage = message.member.user.username;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];

    const embed = new EmbedBuilder()
        .setColor("E06C75")
        .setImage(randomGif)
        .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

    message.reply({ embeds: [embed] });
}
