import { EmbedBuilder } from "discord.js";

const randomGifs = ["https://cdn.discordapp.com/attachments/882829220198375434/1312128648102543431/descarga_1.gif?ex=674b5e87&is=674a0d07&hm=170ce3e5921c1f074158ef34fdc2480ce3ac03c0de8441cdbd0b091525306b0f&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312128648605863996/Bitch_Slap_GIF_-_Bitch_Slap_Slap_-_Discover__Share_GIFs.gif?ex=674b5e87&is=674a0d07&hm=f946c82d769c1836705b2978c48a2f2ada508f796b50ba15166a941f7cd1eab2&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312128649121759232/Will_Smith_Slap_GIF_by_Xavier_Degraux_-_Find__Share_on_GIPHY.gif?ex=674b5e88&is=674a0d08&hm=692181d195899448095840c6faa3d960c0e1278b8af41ea1150ef4162c570f09&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312131853289001081/descarga_4.gif?ex=674b6184&is=674a1004&hm=544fd20f3683f52ab0726a591ad49888dc139f40f442188e060043e74cff7ac1&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312128649792589885/Baby_Slap_GIF_-_Baby_Slap_Cute_-_Discover__Share_GIFs.gif?ex=674b5e88&is=674a0d08&hm=fcaa9e48ac9fcdc4bb29cdc2e8324e9536c4039b3efa8c67452ccaf9c98a6c54&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312128650459615424/RokuHachi.gif?ex=674b5e88&is=674a0d08&hm=b50397d7520998b4a6880ae98175f379250fbb0c400ffdcce1ba377f46b680db&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312128651034366022/Anger_Slap_GIF_-_Anger_Slap_Chata_-_Discover__Share_GIFs.gif?ex=674b5e88&is=674a0d08&hm=f979408888bb68847bac3b9104b8cbcaa8a0d1af752671797e2349c3475f67a7&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312128651739005039/Slap_Slapping_GIF_-_Slap_Slapping_Head_-_Discover__Share_GIFs.gif?ex=674b5e88&is=674a0d08&hm=680859e5d662dff016c1cfee77dbab947aa5b0956cbdf13a34ff9a1467eeaf5e&",
    "https://cdn.discordapp.com/attachments/882829220198375434/1312128774090784968/Slap_Face_GIF_-_Slap_Face_In_-_Discover__Share_GIFs-min.gif?ex=674b5ea5&is=674a0d25&hm=ec9e0503a0de83d006600e05885019c9475d601c321566cfdd6d9c60eec841e7&"]

const messages = ["le pegó a", "le pegó una cachetada a", "le dió una bofetada a", "le dió una trompada a", "durmió a", "abofetea a"];

export default function getSlap(message) {
    const mentionedUser = message.mentions.users.first();

    if (!mentionedUser) {
        return message.reply("Mencioná a alguien para pegarle, no te autopegues. Valorate capo mastodonte")
    }

    const userMessage = message.member.user.username;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomGif = randomGifs[Math.floor(Math.random() * randomGifs.length)];

    const embed = new EmbedBuilder()
        .setColor("FFA300")
        .setImage(randomGif)
        .setDescription(`**${userMessage}** ${randomMessage} **${mentionedUser.username}**`)

    message.reply({ embeds: [embed] });
}